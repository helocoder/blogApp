const express = require ('express');
const Blog = require('./models/blog')
const blogRoutes = require('./routes/blogRoutes')
const app = express();
const mongoose = require('mongoose');
const dbURI = "mongodb+srv://abhi:abhi963@cluster0.ducobhe.mongodb.net/nodeTut?retryWrites=true&w=majority"



//middleware
app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));

//register view engine//
app.set('view engine','ejs');

mongoose.connect(dbURI,(err)=>{
    app.listen(2000);
    if(err){
        console.log(err)
    }
    else{
        console.log("Db connect");
    }
});


//request//
app.get('/',(req,res)=>{
  
    Blog.find() 
    .then((result)=>{
     
        res.render('blog',{title:"All blogs",blogs:result});
    })
    .catch((err)=>console.log(err))
   

});

//Blog route
app.use(blogRoutes);

//post request //
app.post('/create',(req,res)=>{
    console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        console.log(result);
    })
   .catch((err)=>console.log(err));

   res.redirect('/');
})



app.get('/about',(req,res)=>{
res.render('about',{title:'about'});
});






 //use()is a middleware 
 app.use((req,res)=>{
    res.render('err',{title:"error page"});
 })


//listen 

