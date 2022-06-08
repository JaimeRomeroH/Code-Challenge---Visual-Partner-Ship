Este proyecto fue hecho para consultar un archivo JSON llamdado estudiantes.json en el cual se habilitaron los 3 endpoints siguientes:

-Obtener la lista de estudiantes completa
-Obtener el email de los estudiantes que tienen una certificación (haveCertification:true)
-Obtener la lista de estudiantes que tengan una determinanda cantidad de creditos mayor a la cantidad deseada

Su uso la dependendcia express para poder mostrar nuestros endpoints dentro de el servidor

La app esta compuesta por una clase Reader la cual lee el archivo JSON y nos devuelve el mismo como un objeto. (lib/utils/Reader.js)
La clase StudentService contiene los metodos static para filtrar el contenido de el archivo JSON. (lib/services/StudentService.js)
La clase StudenController nos ayuda a poder comunicar la clase StudentService con el server. (lib/controllers/StudentControllers.js)
Dentro de el archivo server.js se encuentran los endpoints para poder conseguir la información que necesitamos. 

Para poder revisar los endpoints creados debemos ejecutar en nuestro cmd el comando **npm run server**

Y en nuestro navagador escribimos las siguientes direcciones

Para consultar a todos los estudiantes escribimos **localhost:3000/v1/students**
Para consultar los emails de los estudiantes con certificación escribimos **localhost:3000/v1/students/emails/true**   
Para consultar los estudiantes con determinada cantidad de creditos mayores a los deseados escribimos por ejemplo **localhost:3000/v1/students/500** (esto nos mostrara los estudiantes con creditos mayor a 500)

