"use strict"

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/mean-todo", { useMongoClient: true }, (err) => {
	if(err) {
		console.log(err.message)
	} else {
		console.log("connected to the database successfully!")
	}
})

