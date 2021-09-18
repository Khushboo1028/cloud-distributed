var mongoose = require("mongoose");

// Creating a Student model
var Student = mongoose.model("Student", {
  studentId: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  course: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  hometown: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
});

module.exports = {
  Student,
};
