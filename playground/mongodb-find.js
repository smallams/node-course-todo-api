// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) =>{
  if(err){
      return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({_id: new ObjectID('5c53b548e48d3361ccb40396')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // }
  // );

  db.collection('Users').find({name: 'Ron Louie Marte'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined, 2));
  },(err) => {
    console.log('Unable to fetch todos', err);
  }
  );


  //client.close();
});
