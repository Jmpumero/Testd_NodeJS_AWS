let checkFields = require("./checkFields");
let entitiesFields = require("./entitiesFields");

const checkData = (payload, entity) => {
    let invalidFields = [];
    let invalidOptional = [];
    let fields = entitiesFields[entity];
    
    invalidFields.push(...checkFields(payload.pk, fields.pk));
    
    invalidOptional.push(...checkFields(payload.update, fields.update));    
    
    
    return {
        invalidFields,
        optionalFound: fields.update.length - invalidOptional.length,
        invalidOptional,
    };
    
};

module.exports = checkData;
