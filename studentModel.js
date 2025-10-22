const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Student name is required.'],
  },
  age: {
    type: Number,
    required: [true, 'Student age is required.'],
    min: [1, 'Age must be a positive number.'],
  },
  course: {
    type: String,
    required: [true, 'Student course is required.'],
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

