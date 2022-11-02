const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment=require('moment');
const ip=require('ip')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://rajgupta07082000:0Um5TBcHGam3DxeZ@cluster0.p92r9bx.mongodb.net/rajgupta07082000-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        var date = moment();
        var currentDate = date.format('DD/MM/YYYY');
        var currentTime=date.format('hh-mm-ss')
        const ipAddress = ip.address();
        console.log(currentDate,",",currentTime,",",ipAddress)
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});