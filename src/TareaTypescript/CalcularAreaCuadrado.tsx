import React, { useState } from 'react';

// Definición de la función para calcular el área de un cuadrado
export const calcularAreaCuadrado = (lado: number): number => {
    return lado * lado;
}

const App: React.FC = () => {
    const [lado, setLado] = useState<number>(0);
    const [area, setArea] = useState<number | null>(null);

    const handleCalcularArea = () => {
        setArea(calcularAreaCuadrado(lado));
    };

    return (
        <div>
            <h1>Calculadora de Área de un Cuadrado</h1>
            <input
                type="number"
                value={lado}
                onChange={(e) => setLado(parseFloat(e.target.value))}
                placeholder="Ingrese el lado del cuadrado"
            />
            <button onClick={handleCalcularArea}>Calcular Área</button>
            {area !== null && <p>El área del cuadrado es: {area}</p>}
        </div>
    );
};


