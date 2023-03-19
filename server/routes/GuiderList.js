const { json } = require('body-parser');
const express= require('express');
const path=require('path');
const route=express.Router();
const schema=require('../models/GuiderRegisterSchema');

// route.post('/GuiderList',(req,res,next)=>{
   
//     res.sendFile(path.join(__dirname,'../../views/GuiderList.html'));
// });

var userLocation=[];
// function iid(){
//     console.log("Hiiiii");
// }

route.post('/GuiderList',async(req,res,next)=>{
    try {
        const location = req.body.location;
        if (!location) {
            return res.status(400).json({ error: "plz fill the credentials" })
        }


        
       userLocation=await schema.find({ City: location  }) ;

        if (!userLocation) {
            
            res.status(400).json({ error: "invalid credentials" })
        }
         else{
            exports.userLocation = userLocation;
            res.status(200).render('GuiderList',{prod: userLocation, rating :5});
         }     
    }
    catch (err) {
        console.log(err);
    }
 
});


exports.route = route;
