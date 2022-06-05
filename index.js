const Reader = require("./lib/utils/Reader");
const estudiantes = Reader.readJSONfile("estudiantes.json");
const StudentService = require("./lib/services/StudentService");
//console.log(estudiantes);
console.log(StudentService.FilterEmailByCertification(estudiantes, true));