var express = require('express');
var bodyParser = require('body-parser'); //convert JSON into an object

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  });
});

//GET /todos/1234324
app.get('/todos/:id', (req, res)=>{
  var id = req.params.id;
  //Validate id using isValid
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }
   //404 = send back empty body
   //findById
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(404).send();
  });
    //success
      //if todo - send it back
      //if no todo - send back 404 with empty 404
    //error
      //400 - send back nothing
});


app.listen(3000, ()=>{
  console.log('Started on port 3000');
});

module.exports = {app};
