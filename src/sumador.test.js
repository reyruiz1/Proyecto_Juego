import ejecutarSecuencia from "./sumador.js";

describe('Simulador de Autitos', () => {
  test('Debe devolver la posición final correcta para el ejemplo 1', () => {
    expect(ejecutarSecuencia('5,5/1,2N/IAIAIAIAA')).toBe('1,3N');
  });
  test('Debe devolver la posición final correcta para el ejemplo 2', () => {
    expect(ejecutarSecuencia('5,5/3,3E/AADAADADDA')).toBe('5,1E');
  });

  test('Debe manejar el borde de la superficie correctamente', () => {
    expect(ejecutarSecuencia('5,5/0,0S/AA')).toBe('0,0S');
  });

  test('Debe ejecutar correctamente los comandos de giro', () => {
    expect(ejecutarSecuencia('5,5/2,2N/IDID')).toBe('2,2N');
  });
});
