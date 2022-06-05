const Reader = require("../lib/utils/Reader");
const StudentService = require ("../lib/services/StudentService");

describe("Unit Tests for StudentService Class", () => {
    test("Test 1: Unit Tests for StudentService Class", () => {
     
        const file = "estudiantes.json";
      
        const students = Reader.readJSONfile(file); 
        const email = StudentService.FilterEmailByCertification(students, true);
        expect(email).toStrictEqual(StudentService.FilterEmailByCertification(students, true));
    });
});