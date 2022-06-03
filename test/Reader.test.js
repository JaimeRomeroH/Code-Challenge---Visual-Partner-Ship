const Reader = require("../lib/utils/Reader");

describe("Unit Tests for Reader Class", () => {
    test("Test 1: Unit Tests for Reader Class", () => {
     
        const file = "estudiantes.json";
      
        const reading = Reader.readJSONfile(file); 
        const data = require("./../estudiantes.json");
        expect(reading).toStrictEqual(data);
    });
});