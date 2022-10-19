
const shareModule = require("./shared");

function generateRow(configDoc,doc){

    let len=280
    let row = new Array(len +1).join( ' ' );
  
    let metaData={}
  
    configDoc.forEach(element => {
  
        metaData[element.nombre_campo]=element
    });
  
    //console.log(metaData);
    row=shareModule.buildRow(row,doc.FECHA_RECIBO,1,metaData.fecha_operacion.longitud)
    row=shareModule.buildRow(row,doc.NUMERO_REFERENCIA,12,metaData.referencia.longitud)
    row=shareModule.buildRow(row,doc.BANCO,23,metaData.banco.longitud)
    row=shareModule.buildRow(row,doc.NUMERO_CUENTA_BANCARIA,39,metaData.cuenta.longitud)
    row=shareModule.buildRow(row,doc.RIF_CLIENTE + doc.RAZON_SOCIAL_CLIENTE,60,metaData.descripcion.longitud)
    row=shareModule.buildRow(row,doc.CODIGO_DE_CLIENTE,96,metaData.codigo_cliente.longitud)
    row=shareModule.buildRow(row,doc.MONEDA,107,metaData.divisa.longitud)
    row=shareModule.buildRow(row,doc.VENDEDOR,111,metaData.vendedor.longitud)
    row=shareModule.buildRow(row,doc.NOMBRE_ZONA,147,metaData.nombre_zona.longitud)
    row=shareModule.buildRow(row,doc.USUARIO_AFV,158,metaData.usuario_afv.longitud)
    //if(metaData.tipo_documento==2){
      //row=shareModule.buildRow(row,doc.NRO_ANEXO_ZONA,179,10)
    //row=shareModule.buildRow(row,test,190,8,'r')
    //}
    
    
    if (doc.MONEDA==='USD'){
      row=shareModule.buildRow(row,shareModule.transformTransationImport(doc.MONTO_DOLAR),199,metaData.importe_transaccion.longitud,metaData.importe_transaccion.alineacion)
    }else{
      
      row=shareModule.buildRow(row,shareModule.transformTransationImport(doc.MONTO_BS),199,metaData.importe_transaccion.longitud,metaData.importe_transaccion.alineacion)
    }
    row=shareModule.buildRow(row,'+',218,metaData.sentido.longitud)
  
    row=shareModule.buildRow(row,shareModule.transformInvoice(doc.FACTURAS),220,metaData.facturas.longitud)
  
  
    return row
  }

  module.exports = {generateRow};