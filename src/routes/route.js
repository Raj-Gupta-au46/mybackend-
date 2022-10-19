const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) { 
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


let arr= [33, 34, 35, 37, 38];
let res =0;

router.get('/missingnumber', function(req , res){
    console.log("the missing number is ", );
    let miss =arr[0];
    for(let i=0;i<=arr.length-1;i++){
        if(miss != arr[i]){
            console.log("missing number",miss);
            break
        }
        miss++
    }c
    res.send("miss")
})








module.exports = router



