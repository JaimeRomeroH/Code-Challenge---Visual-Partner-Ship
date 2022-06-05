
class StudentService{
    static FilterEmailByCertification(students, certification){
        const emailByCertification =  students.filter((student) => student.haveCertification == certification);
        const emailStudent = emailByCertification.map((student) => getEmail(student));
        return emailStudent;
    }
}

const getEmail = function(student){
    return student.email;
}

module.exports = StudentService;