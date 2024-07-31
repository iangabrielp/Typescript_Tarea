import React from 'react'

interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
}
export const Ejercicio4 = () => {
    const alumno: Alumno[] = [
      {
        nombre: 'Viviana',
        edad: 19,
        calificacion: 10,
      },
      {
        nombre: 'Wendy',
        edad: 20,
        calificacion: 8,
      },
      {
        nombre: 'Gerson',
        edad: 18,
        calificacion: 9,
      }
    ];
  
    const calcularPromedio = (alumno: Alumno[]): number => {
      const sumaCalificaciones = alumno.reduce((suma, alumno) => suma + alumno.calificacion, 0);
      return sumaCalificaciones / alumno.length;
    };
    const promedio = calcularPromedio(alumno);
    return (
      <div>
        <h3>Ejercicio 4</h3>
        <span>El promedio de  las calificaciones es:{promedio}</span>
      </div>
    )
  }
