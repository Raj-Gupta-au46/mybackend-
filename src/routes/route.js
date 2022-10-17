const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})




// first part---------------------------------------------------------------------------------

router.get('/movie', function (req, res){
    console.log("list of movie" , req.params);
    const listmovie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    res.send(listmovie)
})


// second part -------------------------------------------------------------------------------

router.get("/movie/:index",function(req,res){
    console.log("list of movies", req.params);
    const listmovie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    const index =req.params.index;
    res.send(listmovie[index])
})


//third part -----------------------------------------------------------------------------------

router.get('/movies/:indexNumber',function(req,res){
    let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
           let myparam=req.params
        let index=myparam.indexNumber
        if(index>movies.length){
            res.send("please use a valid index")
        }else{
            res.send(movies[index])
        }
});


// fourth part ------------------------------------------------------------------------------------


router.get('/Films',function(req,res){
    let Films=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       res.send(Films)
});


//fifth problem ------------------------------------------------------------

router.get('/Films/:filmid',function(req,res){
    let Films=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       
    id=req.params.filmid
    if(id>Films.length){
        res.send("No such that film exist")
    }else{
        res.send(Films[id])
    }
})












// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router



