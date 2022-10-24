const entitiesFields = {
    articulos: {
        pk: [
            { FECHA_RECIBO: "string" },
            {BANCO:"string"},
            {NUMERO_CUENTA_BANCARIA:"string"},
            {RAZON_SOCIAL_CLIENTE:"string"},
            {CODIGO_DE_CLIENTE:"string"},
            {MONEDA:"string"},
            {MONEDA:"string"},
            {MONTO_DOLAR:"string"},// ojo todos tiene este campo?
            {MONTO_BS:"string"}, //ojo todos tiene este campo?
          
            ],
        update: [
            { VENDEDOR: "string"},
            { NOMBRE_ZONA: "string" },
            { USUARIO_AFV: "string" },
            { NRO_ANEXO_ZONA: "string" },
            { NRO_ANEXO: "string" }
           
          
        ]
    }
    

};

module.exports = entitiesFields;
