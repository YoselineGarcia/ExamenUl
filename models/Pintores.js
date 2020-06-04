const moongose = require('mongoose');
let Schema = mongoose.Schema;
let PintoresSchema = new Schema({
    name:{
        type:String,
    required : [true , 'Requerimos el nombre'] 
    },
    corriente:{
        type:String,
        required: [true , 'Requerimos la corriente'] 
    },
   
    nacionalidad:{
        type:String,
        required : [true , 'Requerimos la nacionalidad'] 
    },

    pintura:{
        type:String,
   
    }

});

module.exports = mongoose.model('Pintores','PintoresSchema');
