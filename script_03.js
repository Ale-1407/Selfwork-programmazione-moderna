 /* importare sia l'oggetto del primo modulo che le due funzioni del secondo 
 e lanciare le due funzioni in sequenza sull'oggetto stampando in console il risultato */

 import student from './script.js';
 console.log(student);

 import newInfo, { totContatti } from './script_02.js';

 const updatedStudent = newInfo(student, ['Federico', 'Simone', 'Martina', 'Sara', 'Marco']);

 const contattiString = totContatti(updatedStudent);

 console.log(contattiString);