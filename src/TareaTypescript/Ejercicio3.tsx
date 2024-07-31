import React from 'react'

export const Ejercicio3 = () => {
    const valores = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const divisibles = (valores: number[]): number[] => {
        return valores.map(valor => valor / 5);
    }
  return (
    <div>
    <h3>
        Ejercicio 3
    </h3>
    <span>El resultado de la division es: {divisibles(valores)}</span>
</div>
  )
}
