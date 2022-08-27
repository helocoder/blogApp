const express = require('express');
const app = express() ;
const morgan = require("morgan")
const Blog = require('./models/blog')
app.set('view engine','ejs')
const mongoose = require('mongoose');
//middleware..

app.use(morgan('dev'));


//mongo uri
//mongo db
mongoose.connect(dbURI,(err)=>{
    app.listen(3000)
    if(err)
    console.log(err)
    else
    console.log("db connect.....")
});

app.get('/add-blog',(req,res)=>{
      const blog = new Blog({
          title:"New Blog 69",
          author:"Abhi",
          body:"wassssss uppp",
          snippet:"snippp"

      });   

      blog.save()
      .then((result)=>{
        res.send(result)
      })
      .catch((err)=>{
        console.log(err);
      });
  
      
      
      
});
app.get('/all-blogs',(req,res)=>{
     Blog.find()
     .then((result)=>{
        res.send(result);
     })
     .catch((err)=>{
        console.log(err);
     });
})

app.get('/single-blog',(req,res)=>{
    Blog.findById("63067ad8381fbbbf3798eb9a")
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>console.log(err))
})

app.get('/',(req,res)=>{
    const blogs = [
    {title:"Dk have low KD",snippet:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."},
    {title:"Abhsihek is hello coder",snippet:"bdajhdahbdhab  adjbdjbad bajskdbaskjd "},
    {title:"friend ship",snippet:"7ds7sad 6a5sd5 asds5 dasd 54da54d a4d5asd"}
];

    res.render('blog',{title:"blog",blogs});
})

app.get('/create',(req,res)=>{
    res.render('create');
})

app.use((req,res)=>{
    res.render('Err');
})





