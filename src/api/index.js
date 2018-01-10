const express = require("express")
// const todos = require("../../mock/todos.json")
const router = express.Router()
const Todo = require("../models/todo")

router.get("/todos", (req, res) => {
	Todo.find({}, (err, todos) => {
		if(err) {
			return res.status(500).json({error: err.message})
		}
		res.json({todos})
	})
})
router.post("/todos", (req, res) => {
	const todo = req.body
	Todo.create(todo, (err, todo) => {
		if(err) {
			return res.status(500).json({error: err.message})
		}
		res.json({"todo": todo, "message": "todo created"})
	})
})
router.put("/todos/:id", (req, res) => {
	const todo = req.body
	const id = req.params.id
	if(todo && todo._id !== id) {
		return res.status(500).json({err: "Ids don't match!"})
	}
	Todo.findByIdAndUpdate(id, todo, {new: true}, (err, todo) => {
		if(err) {
			return res.status(500).json({error: err.message})
		}
		res.json({"todo": todo, "message": "todo updated"})
	})
})


module.exports = router