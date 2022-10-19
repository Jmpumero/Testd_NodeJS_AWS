function transformInvoice(str){

    let replaceStr = str.replace('"[', '');
    replaceStr = replaceStr.replace(']"', '');
    //replaceStr = replaceStr.replace(/,/g, '');
    return replaceStr
  }
    function transformTransationImport(str){
  
      const replaceStr = str.replace('.', ',');
      
      return replaceStr
    }
  
    function replaceRange(s, start, end, substitute) {
      return s.substring(0, start) + substitute + s.substring(end);
    }
    
    function truncateToLeft (string = '', limit = 0) {  
        return string.slice(-limit)
      }
    
    function truncateToRight (string = '', limit = 0) {  
         return string.substring(0, limit)
      }
    
    function buildRow(row,str,initialPos,length,alignment=1){
    
      let newRow=''
      newRow=row
    
      if (alignment===2){
        str=str.padStart(length,' ')
        str=truncateToLeft(str,length) 
      }else{
        str=str.padEnd(length,' ')
        str=truncateToRight(str,length)
      }
      newRow=replaceRange(row,initialPos-1,initialPos+(length-1),str)
    
    
      return newRow
    }

    module.exports = {buildRow,transformInvoice,transformTransationImport};