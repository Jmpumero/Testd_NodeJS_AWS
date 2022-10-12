const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;
// const Str = require('@supercharge/strings')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

console.log("ola k ase");
let len=20
var str = new Array(len + 1).join( "#" );

function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
  }
  
  function replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

//var str = "this is a string";
var newString = replaceRange(str, 0, 4, limit("hello",4)); 
newString = replaceRange(newString, 6, 12,limit("ola",12-6)); 
newString = replaceRange(newString, 16, 19,limit("k ase",19-16)); 
//hell###ola######k a
//####################

  const greeting = limit('Hello Marcus', 6)  
  //console.log(str);




//const limit_2 = Str('oola ke ases').limit(6).get()  
// 'Hello '
console.log(str);
console.log(newString);