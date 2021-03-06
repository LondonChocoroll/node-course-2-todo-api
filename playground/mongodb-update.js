//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
      return console.log('Unable to connect to db server.');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID("5b990ff5a8a34c24b86bea39")
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result)=>{
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5ba0f3e07182f74623be20d1")
    }, {
        $set: {
          name: "James"
        },
        $inc: {
          age: 1
        }
      } , {
      returnOriginal: "Mike"
    }).then((result)=>{
        console.log(result);
    });

    //db.close();
});
