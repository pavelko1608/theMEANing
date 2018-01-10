"use strict"
const Todo = require("./models/todo")

const todos = [
	"Go to college",
	"get a job",
	"build a house",
	"plant a tree"
]

todos.forEach((todo, index) => {
	Todo.find({"name": todo}, (err, todos) => {
		if(!err && !todos.length) {
			Todo.create({completed: false, name: todo})
		}
	})
})