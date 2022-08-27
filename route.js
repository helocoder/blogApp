const fs = require('fs')
const http = require('http')



const server = http.createServer((req,res)=>{
         
let path = './views/'
switch (req.url){
    case '/':
        path+="index.html";
        break;
    case '/about':
    path+="about.html";
    break;
    case '/about-me':
        res.statusCode = 200;
        res.setHeader('Location','/about');
        res.end();
        break;
    default:
        path+="404.html"
        break;
}

fs.readFile(path,(err,data)=>{
    if(err)
    {
        console.log(err);
        res.end();
    }
    else{
       res.end(data);
    }
}
)
})




server.listen(4000,"localhost",()=>{
    console.log("listenig....")
})