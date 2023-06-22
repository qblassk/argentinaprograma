const readlineSync = require('readline-sync');

const numero = readlineSync.question('Ingrese un número del 1 al 7, que representa un día en la semana: ');

switch (numero) {
   case '1':
      console.log('Hoy es lunes');
      break;
   case '2':
      console.log('Hoy es Martes');
      break;
   case '3':
      console.log('Hoy es Miércoles');
      break;
   case '4':
      console.log('Hoy es Jueves');
      break;
   case '5':
      console.log('Hoy es Viernes');
      break;
   case '6':
      console.log('Hoy es Sábado');
      break;
   case '7':
      console.log('Hoy es Domingo');
      break;
   default:
      console.log('Número inválido');
      break;
}
