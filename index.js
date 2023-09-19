// //VDO 6 anil //Global and non Global Module 

// const fs = require("fs");  
// console.log("working on something");
// // we never import console 
//  fs.writeFileSync("abc.txt", "i am coding");  //giving error untill we are not defining and it is non global not like console.  so finally we need fs file to import because we want to get access .
//  //so finally jo module hume import krne hote hain wo non-global module hote hain.

//  console.log("Asking for dir name ==>>>",__dirname);

//  // Note:- require se fs ke ander ke sare data import ho gaya hai lekin agar file size ko manage krna hai to sirf jaroorat ke cheej ko import kar sakte hain by using 
//  // const fs = require("fs").writeFileSync; 
//  // fs("abc.txt", "only needed import hua ha");  

 //Vdo 7 Anil

//  const http = require("http");

//  http.createServer((req,resp)=>{
//   resp.write("hello this is anil");
//   resp.end();
//  }).listen(4500);



// Vdo 8 node mein  
// command npm init then multiple infomation i have added then package.json got ready
// and also we can add more things by searching on google like colorful console







var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass