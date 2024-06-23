const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const connectToMongo = require('../dbConnect');
const {Schema} = mongoose;


const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true,
        unique: true
    },
    tag:{
        type:String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Notes' , NotesSchema);