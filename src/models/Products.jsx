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
        isActive:{
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,

    },
);
const product = mongoose.model('product',schema);
module.exports = product