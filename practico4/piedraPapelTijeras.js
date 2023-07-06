const readlineSync = require('readline-sync');

const piedra = 'piedra';
const papel = 'papel';
const tijeras = 'tijeras';

const obtenerJugadaUsuario = function () {
   const jugadaUsuario = readlineSync.question('Ingrese su jugada: ');
   return jugadaUsuario;
};

const obtenerJugadaComputadora = function () {
   const jugadas = [piedra, papel, tijeras];
   const jugadaComputadora = jugadas[Math.floor(Math.random() * jugadas.length)];
   return jugadaComputadora;
};

const determinarGanador = function (jugadaComputadora, jugadaUsuario) {
   let resultado = '';
   if (jugadaComputadora === jugadaUsuario) {
      resultado = 'Empate';
   } else if (
      (jugadaComputadora === piedra && jugadaUsuario === tijeras) ||
      (jugadaComputadora === papel && jugadaUsuario === piedra) ||
      (jugadaComputadora === tijeras && jugadaUsuario === papel)
   ) {
      resultado = 'Gana la computadora';
   } else {
      resultado = 'Gana el usuario';
   }
   return (
      'La computadora eligió: ' +
      jugadaComputadora +
      '\n' +
      'El usuario eligió: ' +
      jugadaUsuario +
      '\n' +
      'El resultado fue: ' +
      resultado
   );
};

const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();

const ganador = determinarGanador(jugadaComputadora, jugadaUsuario);

console.log(ganador);
