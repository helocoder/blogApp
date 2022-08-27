const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    //header
    //  res.setHeader('content-Type','text/plain');
    //  res.write("hello coder");
    //  res.end();

     //send html as res //
    //  res.setHeader("content-type",'html');
    //  res.write('<h1>helo coder</h1>');
    //  res.write('<p> wohoohohooh </p>')
    //  res.end();

    //send html file as res //
    res.setHeader("content-type",'text/html')
    fs.readFile('./views/index.html',(err,data)=>{
         if(err)
         {
            console.log(err);
            res.end();

         }
         else
         res.end(data);
    })
   
 
    

});
server.listen(2000,"localhost",()=>{
    console.log("listening.....")
})
