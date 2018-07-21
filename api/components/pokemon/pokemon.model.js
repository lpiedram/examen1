'use strict';
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    _id : {type: mongoose.Schema.ObjectId, auto: true},
    numero : {type : Number, required : true},
    nombre : {type : String, required: true}
    // tipo1 : {type : String},
    // tipo2 : {type : Number}
});

module.exports = mongoose.model('pokemon', pokemonSchema);