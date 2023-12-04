const mongoose  = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    work:String
}) 

module.exports = mongoose.model('ToDoList',ToDoSchema)