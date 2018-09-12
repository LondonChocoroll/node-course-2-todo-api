//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
      return console.log('Unable to connect to db server.');
    }
    console.log('Connected to MongoDB');
    //const db = client.db('TodoApp')

    // db.collection('Users').insertOne({
    //   name: 'James',
    //   age:26,
    //   location: 'Australia'
    // }, (err, result)=>{
    //   if(err){
    //     return console.log('Unable to insert info provided.');
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    // });

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Unable to insert todo', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});
