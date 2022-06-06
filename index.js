const Reader = require("./lib/utils/Reader");
const estudiantes = Reader.readJSONfile("estudiantes.json");
const StudentService = require("./lib/services/StudentService");
const StudentController = require("./lib/controllers/StudentController");
//console.log(estudiantes);
//console.log(StudentService.FilterEmailByCertification(estudiantes, true));
console.log(StudentController.getEmailByCertification(true));