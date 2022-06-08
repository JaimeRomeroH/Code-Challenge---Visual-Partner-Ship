Este proyecto fue hecho para consultar un archivo JSON llamdado estudiantes.json en el cual se habilitaron los 3 endpoints siguientes:

<p>
 -Obtener la lista de estudiantes completa <br>
 -Obtener el email de los estudiantes que tienen una certificación (haveCertification:true) <br>
 -Obtener la lista de estudiantes que tengan una determinanda cantidad de creditos mayor a la cantidad deseada <br>
</p>

Su uso la dependendcia express para poder mostrar nuestros endpoints dentro de el servidor
<p>
La app esta compuesta por una clase Reader la cual lee el archivo JSON y 
nos devuelve el mismo como un objeto. (lib/utils/Reader.js) <br>
La clase StudentService contiene los metodos static para filtrar el contenido
de el archivo JSON. (lib/services/StudentService.js) <br>
La clase StudenController nos ayuda a poder comunicar la clase StudentService 
con el server. (lib/controllers/StudentControllers.js) <br> <br>
Dentro de el archivo server.js se encuentran los endpoints para poder conseguir la información que necesitamos. 
</p>
<p>
Para poder revisar los endpoints creados debemos ejecutar en nuestro cmd el comando <b>npm run server</b>
</p>
<p>
Y en nuestro navagador escribimos las siguientes direcciones <br>
</p>
Para consultar a todos los estudiantes escribimos <b>localhost:3000/v1/students</b> <br> <br>
Para consultar los emails de los estudiantes con certificación escribimos <b>localhost:3000/v1/students/emails/true</b> <br> <br>
Para consultar los estudiantes con determinada cantidad de creditos mayores a los deseados escribimos por ejemplo <b>localhost:3000/v1/students/500</b> (esto nos mostrara los estudiantes con creditos mayor a 500) 

