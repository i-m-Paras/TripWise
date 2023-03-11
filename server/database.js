const mongodb= require('mongodb');
const MongoClient=mongodb.MongoClient;

const mongoConnect= (callback) =>{MongoClient.connect('mongodb+srv://awasthiparas6:Paras123@cluster0.cqcraga.mongodb.net/?retryWrites=true&w=majority').then(client=>{
    console.log("Connected!");
    callback(client);
}).catch(err => {
    console.log(err);
});
}; 
module.exports= mongoConnect;