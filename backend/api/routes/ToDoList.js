const express = require('express');
const routes = express.Router();
const ToDoList = require('../model/ToDoList')
const mongoose = require('mongoose')

 
routes.post('/',(req,res,next)=>{
    const todolist = new ToDoList({
        _id: new mongoose.Types.ObjectId,
        work:req.body.work
    })
    todolist.save()
    .then((result)=>{
        res.status(200).json({
            TodoListData:result
        })
     })
     .catch((err)=>{
        res.status(500).json({
            error:err
        })
     })
})
routes.get('/',(req,res,next)=>{
    ToDoList.find()
    .then((result)=>{
        res.status(200).json({
            TodoListData:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            error:err
        })
    })
})

routes.get('/:id',(req,res,next)=>{
    ToDoList.findById(req.params.id)
    .then((result)=>{
        console.log(result)
        res.status(200).json({
            TodoListData:result
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

routes.delete('/:id',(req,res,next)=>{
    ToDoList.deleteOne({_id:req.params.id})
     
    .then((result)=>{
        res.status(200).json({
            TodoListData:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            error:err
        })
    })
})

routes.put('/:id',(req,res,next)=>{
    ToDoList.findOneAndUpdate({_id:req.params.id},{
        $set:{
            work:req.body.work
        }
    })
    .then((result)=>{
        res.status(200).json({
            TodoListData:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            error:err
        })
    }) 
})

module.exports = routes;
 
 