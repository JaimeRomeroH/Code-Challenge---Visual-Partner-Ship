const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Api welcome!"});
});

app.listen(port, () => {
    console.log(`API in localhost:${port}`);
});

app.get("/v1/students", (request, response) =>{
   
    
    response.json(StudentController.getAllStudents());
});
app.get("/v1/students/emails/true", (request, response) =>{
    
 
    response.json(StudentController.getEmailByCertification(true));
});

app.get("/v1/students/:credits", (request, response) =>{
    const credits = request.params.credits;
    const studentsCredrits = StudentController.getStudentsByCredits(credits);
    response.json(studentsCredrits);
});