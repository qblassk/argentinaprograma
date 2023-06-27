const listaDePersonas = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];
const admitidos = [];
const rechazados = [];

for (let i = 0; i < listaDePersonas.length; i++) {
   if (listaDePersonas[i] === 'Jose' || listaDePersonas[i] === 'Sofia') {
      rechazados.push(listaDePersonas[i]);
   } else {
      admitidos.push(listaDePersonas[i]);
   }
}

console.log('La lista de invitados admitidos es: ');
for (let i = 0; i < admitidos.length; i++) {
   console.log(admitidos[i]);
}

console.log('');

console.log('La lista de invitados rechazados es: ');
for (let i = 0; i < rechazados.length; i++) {
   console.log(rechazados[i]);
}

console.log('');

console.log('La lista ordenada de invitados admitidos es: ');
admitidos.sort();
for (let i = 0; i < admitidos.length; i++) {
   console.log(admitidos[i]);
}

console.log('');

console.log('La lista ordenada de invitados rechazados es: ');
rechazados.sort();
for (let i = 0; i < rechazados.length; i++) {
   console.log(rechazados[i]);
}
