//const Reader = require("../utils/Reader")
class StudentService{

    static allStudents(students){
      const studentsList = students.filter((student) => student);
      return studentsList;
    }

    static FilterEmailByCertification(students, certification){
        const emailByCertification =  students.filter((student) => student.haveCertification == certification);
        const emailStudent = emailByCertification.map((student) => getEmail(student));
        return emailStudent;
    }

    static FilterStudentsByCredits(students, credits){
        const studentsByCredits = students.filter((student) => student.credits > credits);
        return studentsByCredits;
    }
}

const getEmail = function(student){
    return student.email;
}

module.exports = StudentService;