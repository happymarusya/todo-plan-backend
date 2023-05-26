const TodoModel = require('./TodoModel');
const mongoose = require("mongoose");

module.exports.getTodo = async(req, res) => {
    const myTodo = await TodoModel.find();
    res.send(myTodo)
}

module.exports.saveTodo = async(req, res) => {
    const {name} = req.body
    TodoModel.create({name})
    .then((data) => {console.log('Point added')
    res.send(data)
})
}

module.exports.deleteTodo = async(req, res) => {
    const {_id } = req.body;
    if(!mongoose.isValidObjectId(_id)) {
        return res.status(400).json({message: 'Invalid Point ID'});
    }
    TodoModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a point'))
}

module.exports.editTodo = async(req, res) => {
    const {_id, name} = req.body;
    if (!mongoose.isValidObjectId(_id)) {
        return res.status(400).json({ message: 'Invalid Point ID' });
}
    TodoModel.findByIdAndUpdate(_id, {name})
    .then(() => res.send('Edited a point'))
}
