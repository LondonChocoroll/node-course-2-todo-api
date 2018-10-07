const {ObjectID} = require('mongodb');

const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');

// Todo.remove({}).then((res)=>{
//   console.log(res);
// });

Todo.findOneAndRemove({_id: "5bb9e6878655ab0ee677b649"}).then((todo)=>{

});
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove("5bb9e6878655ab0ee677b649").then((todo)=>{
  console.log(todo);
});
