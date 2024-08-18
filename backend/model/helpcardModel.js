const mongoose = require('mongoose');
const Schema = mongoose.Schema

const createHelpCard = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {type:String},
    description: {type: String}
})

const HelpCard = mongoose.model("HelpCard", createHelpCard)

module.exports = HelpCard