const mongoose = require('mongoose')
const Schema = mongoose.Schema


const phoneSchema = new Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String,
            required: true
        },
        manufacturer: {
            type: String
        },
        description: {
            type: String
        },
        color: {
            type: String
        },
        price: {
            type: Number
        },
        imageFileName: {
            type: String
        },
        screen: {
            type: String
        },
        processor: {
            type: String
        },
        ram: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Phone", phoneSchema);



