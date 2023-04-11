const mongoose = require('mongoose')

const cuadrosSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
            unique: true,
        },
        Image:{
            type: String,
            require: true,
            unique: true,
        },
        value:{
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true,

    },
);
const product = mongoose.model('Products', schema);
module.exports = product