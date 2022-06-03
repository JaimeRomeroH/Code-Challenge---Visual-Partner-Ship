const Reader = require("./lib/utils/Reader");
const estudiantes = Reader.readJSONfile("estudiantes.json");
console.log(estudiantes);