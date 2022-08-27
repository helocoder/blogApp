const _ = require('lodash');

const num = _.random(0,50);
console.log(num);


//_.once(run function only once)

const greet = _.once(()=>{
    console.log("hello coder");
})

greet();
greet();