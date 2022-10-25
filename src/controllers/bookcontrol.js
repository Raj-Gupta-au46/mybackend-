const BookModel=require('../models/bookmodel')
const createBook=async function (req,res){
    let list=req.body
    let savedlist=await BookModel.create(list)
    res.send({msg:savedlist})
}
const getBookslist=async function (req,res){
    let allBooks=await BookModel.find()
    res.send({msg:allBooks})
}
module.exports.createBook=createBook
module.exports.getBookslist=getBookslist