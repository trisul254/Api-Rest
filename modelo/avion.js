var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var avion = new Schema(
    {
        nombre : {
            type: String,
            required:'el nombre del avion es requerido'
        },

        color:{
            type:String,
            required:'el color del avion es requerido'
        },
        modelo:{
            type:String,
            required:'El modelo del avion es requerido'
        },
        asientos:{
            type:Number,
            required:'Numero de asientos requeridos'
        },
        aerolinea:{
            type:String,
            required:'La aerolinea es necesaria'
        },
        _id: false
    });

module.exports = mongoose.model('avion',avion);