import React, { useState } from 'react'

export const Ejercicio5 = () => {
    const [valorContador, setValorContador] = useState<number>(0);
    const cambiarCont = (numero: number) => {
    setValorContador(valorContador + numero);
  }
  return (
    <div>
      <h3>Ejercicio5</h3>
      <h3> Acumular de 5: <small>{valorContador}</small></h3>
      <button className="btn btn-primary" onClick={() => cambiarCont(-5)}>
        disminuir -5
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => cambiarCont(5)}>
        incrementar +5
      </button>
    </div>
  )
}
