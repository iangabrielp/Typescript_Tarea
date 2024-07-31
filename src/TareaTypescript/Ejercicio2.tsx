import React from 'react'

export const Ejercicio2 = () => {
  const elemento = [1, 2, 3, 4, 5, 6, 7]
  const suma = (elemento: number[]): number => {
    return elemento.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  };
  return (
    <div>
      <h3>Ejercicio2</h3>
      <span>El resultado es el siguiente: {suma(elemento)}</span>
    </div>
  )
}
