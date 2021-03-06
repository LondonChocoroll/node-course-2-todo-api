//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
      return console.log('Unable to connect to db server.');
    }
    console.log('Connected to MongoDB');

    const db = client.db('TodoApp');
    //array is a promise
    // db.collection('Todos').find({
    //   _id: new ObjectID("5b9609d3adf23c1a006ba137")
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch notes', err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: "James"}).count().then((count)=>{
      console.log(`Todos count: ${count}`);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

    //client.close();
});
