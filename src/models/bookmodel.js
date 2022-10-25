const mongoose=require('mongoose')
const BookSchema=new mongoose.Schema({
    bookName:String,
    authorName:String,
    category:String,
    year:{
        type:Number,
        required:true,
    }
},
{timestamps:true});
module.exports=mongoose.model('Book',BookSchema)