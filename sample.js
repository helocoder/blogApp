const express = require('express');
const app = express();
const Blog = require('./models/blog');
const mongoose = require('mongoose');
const dbURI = "mongodb+srv://abhi:abhi963@cluster0.ducobhe.mongodb.net/nodeTut?retryWrites=true&w=majority"
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
mongoose.connect(dbURI,(err)=>{
    if(err)
    console.log(err)
    else{
        app.listen(5000,()=>{
            console.log("working....")
        });
    }
    app.listen(2000,()=>{
        console.log("working....")
    });

})

app.get('/',(req,res)=>{
    res.render('create',{title:"tits"});
});

app.post('/create',(req,res)=>{
       const blog = new Blog(req.body);
       blog.save()
       .then((result)=>{
        console.log(result);
       })
       .catch((err)=>{
        console.log(err);
       })
})


