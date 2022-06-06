const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController{
    static getEmailByCertification(certification){
        const students = Reader.readJSONfile("estudiantes.json");
        const filterEmail = StudentService.FilterEmailByCertification(students, certification);
        return filterEmail;
    }
   
}

module.exports = StudentController;