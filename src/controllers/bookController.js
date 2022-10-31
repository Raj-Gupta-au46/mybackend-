const newAuthorModel = require("../models/authorModel");
const newBookModel = require("../models/bookModel");
const newPublisherModel = require("../models/newPublisherModel");

const createNewAuthor = async function (req, res) {
  let data = req.body;
  const { author_name, address } = data;
  if (!author_name) {
   return res.send("Name is Required");
  }
  if (!address) {
    return res.send("Address is Required");
  }
  let savedData = await newAuthorModel.create(data);
  res.send({ msg: savedData });
};

const getNewAuthor = async function (req, res) {
  let allUsers = await newAuthorModel.find();
  res.send({ msg: allUsers });
};

const createNewBook = async function (req, res) {
  let data = req.body;
  const { bookName} = data;
  if (!bookName) {
    res.send("bookName is Required");
  }
  let savedData = await newBookModel.create(data);
  res.send({ msg: savedData });
};

const getNewBook = async function (req, res) {
  let allUsers = await newBookModel.find().populate("author_id").populate("publisher");
  res.send({ msg: allUsers });
};

const createNewPublisher = async function (req, res) {
  let data = req.body;
  const { name, headQuarter } = data;
  if (!name) {
    res.send("Name is Required");
  }
  if (!headQuarter) {
    res.send("headQuarter is Required");
  }
  let savedData = await newPublisherModel.create(data);
  res.send({ msg: savedData });
};

const getNewPublisher = async function (req, res) {
  let allUsers = await newPublisherModel.find();
  res.send({ msg: allUsers });
};

const putNewBook = async function (req, res) {
  let obj1 = await newPublisherModel.findOne({ name: "Penguin" });
  let id1 = obj1._id;
  console.log(id1);
  let obj2 = await newPublisherModel.findOne({ name: "HarperCollins" });
  let id2 = obj2._id;
  console.log(id2);

  let newbooks = await newBookModel.updateMany(
    { publisher: [id1, id2] },
    { $set: { isHardCover: false } },
    { new: true }
  );
  let updatedbooks = await newBookModel.find({ newbooks });
  res.send({ data: updatedbooks });
};

const updateRating = async function (req, res) {
  let arr1 = await newAuthorModel.find({ ratings: { $gt: 3.5 } });
  let newarr = [];
  for (i of arr1) {
    id = i._id;
    let tosend = await newBookModel.findOneAndUpdate(
      { author_id: id },
      { $inc: { price: 10 } },
      { new: true }
    );
    newarr.push(tosend);
  }
  res.send({ mes: newarr });
};

module.exports.createNewAuthor = createNewAuthor;
module.exports.getNewAuthor = getNewAuthor;
module.exports.createNewBook = createNewBook;
module.exports.getNewBook = getNewBook;
module.exports.createNewPublisher = createNewPublisher;
module.exports.getNewPublisher = getNewPublisher;
module.exports.putNewBook = putNewBook;
module.exports.updateRating = updateRating;
