let docs=[
    {
      "SDS_SEQUENCE_ID": 2195886,
      "ID_ZONA": 1001219,
      "FECHA_RECIBO": "2021-12-17",
      "CODIGO_DE_CLIENTE": "0505231",
      "RIF_CLIENTE": "J315648342",
      "RAZON_SOCIAL_CLIENTE": "CORPORACION VIDOSO C A",
      "FECHA_PAGO": "2021-12-06",
      "FORMA_PAGO": "TRANSFERENCIA BS",
      "NUMERO_REFERENCIA": "00073899",
      "BANCO": "Mercantil ",
      "NUMERO_CUENTA_BANCARIA": "01050699905699042245",
      "OBSERVACIONES": "",
      "ID_MONEDA": 205,
      "MONEDA": "BS",
      "MONTO_DOLAR": "3.90",
      "MONTO_BS": "18.14",
      "NRO_RECIBO": "26",
      "NOMBRE_ZONA": "ZONA 108",
      "USUARIO_AFV": "febeca549",
      "VENDEDOR": "ALEXANDRA NAVARRO CYC",
      "FACTURAS": "\"[06226874]\""
    },
    {
      "SDS_SEQUENCE_ID": 2201499,
      "ID_ZONA": 1001189,
      "FECHA_RECIBO": "2021-12-30",
      "CODIGO_DE_CLIENTE": "1711491",
      "RIF_CLIENTE": "J407339621",
      "RAZON_SOCIAL_CLIENTE": "MI TIENDA VENEZUELA, C.A",
      "FECHA_PAGO": "2021-12-29",
      "FORMA_PAGO": "TRANSFERENCIA BS",
      "NUMERO_REFERENCIA": "00085102",
      "BANCO": "Mercantil ",
      "NUMERO_CUENTA_BANCARIA": "01050699905699042245",
      "OBSERVACIONES": "",
      "ID_MONEDA": 205,
      "MONEDA": "BS",
      "MONTO_DOLAR": "267.19",
      "MONTO_BS": "1223.69",
      "NRO_RECIBO": "40",
      "NOMBRE_ZONA": "ZONA 68",
      "USUARIO_AFV": "febeca549",
      "VENDEDOR": "ALEXANDRA NAVARRO CYC",
      "FACTURAS": "\"[06252232, 06252233, 06252234, 06252235]\""
    }
  ]

let confDoc= [
  {
    "nombre_campo": "fecha_operacion",
    "tipo_documento": 1,
    "orden": 1,
    "posicion_inicial": 0,
    "requerido": true,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "Date",
    "longitud": 10,
    "formato": "yyyy-MM-dd",
    "alineacion": 1
  },
  {
    "nombre_campo": "referencia",
    "tipo_documento": 1,
    "orden": 2,
    "posicion_inicial": 11,
    "requerido": false,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 8,
    "formato": "%-23.23s",
    "alineacion": 1
  },
  {
    "nombre_campo": "banco",
    "tipo_documento": 1,
    "orden": 3,
    "posicion_inicial": 22,
    "requerido": true,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 10,
    "formato": "%-23.10s",
    "alineacion": 1
  },
  {
    "nombre_campo": "cuenta",
    "tipo_documento": 1,
    "orden": 4,
    "posicion_inicial": 38,
    "requerido": true,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 20,
    "formato": "%-20.20s",
    "alineacion": 1
  },
  {
    "nombre_campo": "descripcion",
    "tipo_documento": 1,
    "orden": 5,
    "posicion_inicial": 59,
    "requerido": true,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 35,
    "formato": "%-35.35s",
    "alineacion": 1
  },
  {
    "nombre_campo": "codigo_cliente",
    "tipo_documento": 1,
    "orden": 6,
    "posicion_inicial": 95,
    "requerido": true,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 8,
    "formato": "%-8.8s",
    "alineacion": 1
  },
  {
    "nombre_campo": "divisa",
    "tipo_documento": 1,
    "orden": 7,
    "posicion_inicial": 106,
    "requerido": true,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 3,
    "formato": "%-3.3s",
    "alineacion": 1
  },
  {
    "nombre_campo": "vendedor",
    "tipo_documento": 1,
    "orden": 8,
    "posicion_inicial": 110,
    "requerido": false,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 35,
    "formato": "%-35.35s",
    "alineacion": 1
  },
  {
    "nombre_campo": "nombre_zona",
    "tipo_documento": 1,
    "orden": 9,
    "posicion_inicial": 146,
    "requerido": false,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 10,
    "formato": "%-10.10s",
    "alineacion": 1
  },
  {
    "nombre_campo": "usuario_afv",
    "tipo_documento": 1,
    "orden": 10,
    "posicion_inicial": 157,
    "requerido": false,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 20,
    "formato": "%-20.20s",
    "alineacion": 1
  },
  {
    "nombre_campo": "nro_anexo_zona",
    "tipo_documento": 1,
    "orden": 11,
    "posicion_inicial": 178,
    "requerido": false,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 10,
    "formato": "%-10.10s",
    "alineacion": 1
  },
  {
    "nombre_campo": "numero_anexo",
    "tipo_documento": 1,
    "orden": 12,
    "posicion_inicial": 189,
    "requerido": false,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 8,
    "formato": "%-8.8s",
    "alineacion": 1
  },
  {
    "nombre_campo": "sentido",
    "tipo_documento": 1,
    "orden": 14,
    "posicion_inicial": 217,
    "requerido": true,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 1,
    "formato": "%c",
    "alineacion": 1
  },
  {
    "nombre_campo": "facturas",
    "tipo_documento": 1,
    "orden": 15,
    "posicion_inicial": 219,
    "requerido": false,
    "separador_decimal": null,
    "separador_miles": null,
    "tipo_de_dato": "String",
    "longitud": 60,
    "formato": "%60.60s",
    "alineacion": 1
  },
  {
    "nombre_campo": "importe_transaccion",
    "tipo_documento": 1,
    "orden": 13,
    "posicion_inicial": 198,
    "requerido": true,
    "separador_decimal": ",",
    "separador_miles": "",
    "tipo_de_dato": "BigDecimal",
    "longitud": 18,
    "formato": "###0.00",
    "alineacion": 2
  }
]



const formatterRecibo = require("./formatter/recibos");

const fs = require('fs');

const content = 'Some content!';


//faltan las validaciones 


var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})
const writeLine = (line) => logger.write(`\n${line}`);
for (let index = 0; index < docs.length; index++) {
  
  const row=formatterRecibo.generateRow(confDoc,docs[index])
  writeLine(row);
}
logger.end()



/*
try {
  fs.writeFileSync('test.txt', row);
  // file written successfully
} catch (err) {
  console.error(err);
}
*/
//let row= generateRow(confDoc,docs[1])
//console.log(row)
//luego aqui seria el proceso de actualizar datos


//logger.write('some data') // append string to your file
//logger.write('more data') // again
//logger.write('and more') // again


