function replaceRange(s, start, end, substitute) {
  return s.substring(0, start) + substitute + s.substring(end);
}

function truncateToLeft (string = '', limit = 0) {  
    return string.slice(-limit)
  }

function truncateToRight (string = '', limit = 0) {  
     return string.substring(0, limit)
  }

 function makestr(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
let metaData= {
  
}

function buildRow(row,str,initialPos,length,alignment){

  let newRow=''
  newRow=row

  if (alignment==="l"){
    str=str.padStart(length,'*')
    //console.log(str)
    str=truncateToLeft(str,length) 
    //console.log(str.length);
  }else{

    str=str.padEnd(length,'#')
    str=truncateToRight(str,length)
  }
  newRow=replaceRange(row,initialPos-1,initialPos+(length-1),str)


  return newRow
}
// regex para decimales seprados por , 
//^([1-9]\d*(\,)\d*|0(\,)\d*[1-9]\d*|[1-9]\d*)$
let len=235
let row = new Array(len +1).join( "#" );
//let t=Math.floor(Math.random()*100);

let test=makestr(235)
//data["field_1"]=makestr(10,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')

//test=test.padStart(10,"#")
//test_2= truncateToLeft(test,10) 
//console.log(test);
//console.log(test_2)

console.log(row.length)
//console.log(test)

row=buildRow(row,'2022-04-01',1,10,'r')
row=buildRow(row,test,12,8,'r')
row=buildRow(row,test,23,10,'r')
row=buildRow(row,test,39,20,'r')
row=buildRow(row,test,60,35,'r')
row=buildRow(row,test,96,8,'r')
row=buildRow(row,test,107,3,'r')
row=buildRow(row,test,111,35,'r')
row=buildRow(row,test,147,10,'r')
row=buildRow(row,test,158,20,'r')
row=buildRow(row,test,179,10,'r')
row=buildRow(row,test,190,8,'r')
row=buildRow(row,'20,563',199,18,'l') //posicion final 217 
row=buildRow(row,test,215,20,'r')// ojo esta posicion esta sobre escribiendo la anteriror
row=buildRow(row,'+',235,1,'r')

console.log(row)
console.log(row.length)