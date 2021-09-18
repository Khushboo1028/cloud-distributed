const express = require("express");
const { Student } = require("./student");

var mongoose = require("mongoose");

var uri = "mongodb+srv://admin:Hello12345@cluster0.2tg4m.mongodb.net/studentDatabase?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

var app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.post("/students", (req, res) => {
  const studentId = req.body.studentId;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const course = req.body.course;
  const hometown = req.body.hometown;2

  var newStudent = new Student({
    studentId,
    firstName,
    lastName,
    age,
    course,
    hometown,
  });

  newStudent.save((err, student) => {
    if (err) {
      res.send("Error Adding Student!");
    }
    res.send(student);
  });
});

app.get("/students", (_, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  Student.find({}, (err, students) => {
    if (err) {
      res.send("Error getting all Students!");
    }
    res.send(students);
  });
});

app.get("/students/:studentId", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  var id = req.params.studentId;

  Student.find({ studentId: id }, (err, student) => {
    if (err) {
      res.send("Error finding Student by ID!");
    }
    res.send(student);
  });
});

