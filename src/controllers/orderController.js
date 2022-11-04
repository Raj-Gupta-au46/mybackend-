const newOrder = require("../models/newOrder");
const newProduct = require("../models/newProduct");
const newUser = require("../models/newUser");
const moment=require('moment')

const createNewUser = async function (req, res) {
  let data = req.body;
  let { author_name } = data;
  if (!author_name)
    return res.send({ msg: "author_name is mandatory in the request" });
  let savedData = await newUser.create(data);
  res.send({ data: savedData });
};

const createNewProduct = async function (req, res) {
  let data = req.body;
  let { product_name } = data;
  if (!product_name)
    return res.send({ msg: "product_name is mandatory in the request" });
  let savedData = await newProduct.create(data);
  res.send({ data: savedData });
};

const createNewOrder = async function (req, res) {
  let Data = req.body;
  let userId = Data.userId;
  let productId = Data.productId;
  let checkUserId = await newUser.findById(userId);
  let checkProductId = await newProduct.findById(productId);
  if (!userId) {
    return res.send({ msg: "userId is a mandatory field" });
  }
  if (!productId) {
    return res.send({ msg: "productId is a mandatory field" });
  }
  if (!checkUserId) {
    return res.send({ msg: "invalid userId" });
  }
  if (!checkProductId) {
    return res.send({ msg: "invalid productId" });
  }
  let isFreeUser = req.header["isfreeappuser"];
  if (isFreeUser === "false") {
    let user = await newUser.findById(userId); // User Balance
    let userBalance = user["balance"];
    let product = await newProduct.findById(productId); // Product Price
    let productPrice = product.price;
    if (userBalance >= productPrice) {
      let userNewBalance = userBalance - productPrice;
      await newUser.findOneAndUpdate(
        { _id: userId },
        { $set: { balance: userNewBalance } }
      );
      let todayDate = moment().format("DD-MM-YYYY");
      Data["amount"] = productPrice;
      Data["date"] = todayDate;
      let savedData = await newOrder.create(Data);
      res.send({ orderplaced: savedData });
    } else {
      return res.send({ msg: "you dont have enough money" });
    }
  } else if (isFreeUser === "true") {
    let today = moment().format("DD-MM-YYYY");
    Data["amount"] = 0;
    Data["isFreeAppUser"] = true;
    Data["date"] = today;
    let savedData = await newOrder.create(Data);
    res.send({ orderPlaced: savedData });
  }

  let OrderData = await newOrder.create(Data);
  res.send({ data: OrderData });
};

const getNewOrder = async function (req, res) {
  let getAllOrder = await newOrder
    .find()
    .populate("userId")
    .populate("productId");
  res.send({ msg: getAllOrder });
};

module.exports.createNewUser = createNewUser;
module.exports.createNewProduct = createNewProduct;
module.exports.createNewOrder = createNewOrder;
module.exports.getNewOrder = getNewOrder;
