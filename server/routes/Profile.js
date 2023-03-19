const express= require('express');
const path=require('path');
const route=express.Router();
const GuiderList=require('./GuiderList');


route.post('/add-rating',async(req,res,next)=>{
    let rate=req.body.RatingStar;
    let fname=req.body.fname;
    let update={Rating:rate}
    let doc = await schema.findOne({ fname: fname });
    doc.Rating=update.Rating;
    doc.save();
    res.redirect('/home');
});


route.post('/GuiderProfile',(req,res,next)=>{
    let iiid=req.body.iid;
    
    res.render('GuiderProfile',{prod: GuiderList.userLocation[iiid]});
});

route.get('/GuiderDashboard',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../../views/GuiderDashboard.html'));
});

module.exports = route;