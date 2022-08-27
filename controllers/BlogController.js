const Blog = require('../models/blog')




const blog_create = (req,res)=>{
    res.render('create',{title:"Create Blog"});
}


const blog_detail = (req,res)=>{
    
        const id = req.params.id;
        
    
        Blog.findById(id)
        .then((result)=>{
            res.render('details',{blog:result,title:'Blog Details'});
        })
        .catch((err)=>{
            console.log(err);
        })
    

}

const delete_blog = (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/blogs'});
        res.redirect('./')
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = {blog_create,blog_detail,delete_blog
}

