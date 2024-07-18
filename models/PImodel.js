const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PISchema = new Schema({
    name: {
        type: String,
        required: [true, '*Campo obrigatório!']
    },
    details: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model('PontosInteresse', PISchema);