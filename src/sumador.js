function ejecutarSecuencia(comandos) {
  const [dimensiones, posicionInicial, secuencia] = comandos.split('/');
  const [maxX, maxY] = dimensiones.split(',').map(Number);
  let [x, y, direccion] = [parseInt(posicionInicial[0]), parseInt(posicionInicial[2]), posicionInicial[3]];

  for (let comando of secuencia) {
    if (comando === 'I') {
      direccion = girarIzquierda(direccion);
    } else if (comando === 'D') {
      direccion = girarDerecha(direccion);
    } else if (comando === 'A') {
      let [nuevoX, nuevoY] = avanzar(x, y, direccion);
      if (nuevoX >= 0 && nuevoX <= maxX && nuevoY >= 0 && nuevoY <= maxY) {
        [x, y] = [nuevoX, nuevoY];
      }
    }
  }

  return `${x},${y}${direccion}`;
}

function girarIzquierda(direccion) {
  const giros = { 'N': 'O', 'O': 'S', 'S': 'E', 'E': 'N' };
  return giros[direccion];
}

function girarDerecha(direccion) {
  const giros = { 'N': 'E', 'E': 'S', 'S': 'O', 'O': 'N' };
  return giros[direccion];
}

function avanzar(x, y, direccion) {
  if (direccion === 'N') y++;
  else if (direccion === 'S') y--;
  else if (direccion === 'E') x++;
  else if (direccion === 'O') x--;
  return [x, y];
}

export default ejecutarSecuencia;
