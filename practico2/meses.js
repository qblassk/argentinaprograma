const readlineSync = require('readline-sync');

const numMes = readlineSync.question('Ingrese un número de mes: ');

const meses = {
   1: 'Enero',
   2: 'Febrero',
   3: 'Marzo',
   4: 'Abril',
   5: 'Mayo',
   6: 'Junio',
   7: 'Julio',
   8: 'Agosto',
   9: 'Septiembre',
   10: 'Octubre',
   11: 'Noviembre',
   12: 'Diciembre',
};

if (numMes == 1 || numMes == 3 || numMes == 5 || numMes == 7 || numMes == 8 || numMes == 10 || numMes == 12) {
   console.log('La cantidad de dias del mes de ' + meses[numMes] + ' es 31.');
} else if (numMes == 4 || numMes == 6 || numMes == 9 || numMes == 10) {
   console.log('La cantidad de dias del mes de ' + meses[numMes] + ' es 30.');
} else if (numMes == 2) {
   console.log('La cantidad de dias del mes de ' + meses[numMes] + ' es 28 o 29.');
} else {
   console.log('Ningún mes tiene esa cantidad de días');
}
