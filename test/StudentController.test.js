const Reader = require("../lib/utils/Reader");
const StudentController = require("../lib/controllers/StudentController");
const StudentService = require ("../lib/services/StudentService");

describe("Unit Tests for StudentController Class", () => {
    test("Test 1: Unit Tests for StudentController Class", () => {
     
        const file = "estudiantes.json";
      
        const students = Reader.readJSONfile(file); 
        const email = StudentController.getEmailByCertification(true)
        expect(email).toStrictEqual(StudentService.FilterEmailByCertification(students, true));
    });

    test("Test 2: Unit Tests for StudentController Class", () => {
     
        const file = "estudiantes.json";
      
        const students = Reader.readJSONfile(file); 
        const estudiantes = StudentController.getStudentsByCredits(500)
        expect(estudiantes).toStrictEqual(StudentService.FilterStudentsByCredits(students, 500));
    });
});