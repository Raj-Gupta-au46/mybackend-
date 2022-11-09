const express = require("express");

const { default: mongoose } = require("mongoose");

const app = express();

const route = require("./routes/route");

const port = process.env.PORT || 3000;



app.use(express.json());

mongoose

  .connect(

    "mongodb+srv://rajgupta07082000:0Um5TBcHGam3DxeZ@cluster0.p92r9bx.mongodb.net/rajgupta07082000-DB",

    {

      useNewUrlParser: true,

    }

  )

  .then(() => console.log("MongoDb is connected"))

  .catch((err) => console.log(err));



app.use("/", route);

app.listen(port, (req, res) => {

  console.log("Express is Running on", port);

});

