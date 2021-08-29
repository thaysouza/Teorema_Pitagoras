import React, { useState } from 'react'

import { Title, Container } from './styles';


const cat1 = (c1, sc1) => {
  return (
    <div>
      <label>
        cateto 1
        <input type="number" value={c1} onChange={(e) => { sc1(e.target.value) }} />
      </label>

    </div>
  )
}
const cat2 = (c2, sc2) => {
  return (
    <div>
      <label>
        cateto 2
        <input type="number" value={c2} onChange={(e) => { sc2(e.target.value) }} />
      </label>

    </div>
  )
}

{/*
const hipotenusa = (h, sh) => {
  return (
    <div>
      <label>
        hipotenusa
        <input type="text" value={h} onChange={(e) => { sh(e.target.value) }} />
      </label>

    </div>
  )
}
*/}




const fcalcularhipotenusa = (c1, c2, sr) => {
  const calc = () => {
    sr(Math.sqrt((c1 * c1) + (c2 * c2)))
  }
  return (
    <div>
      <button onClick={calc}>Calcular hipotenusa</button>
    </div>
  )
}

const fresultado = (r) => {
  return (
    <div>
      <p>Resultado: {r.toFixed(2)} </p>
    </div>
  )
}

export default function App() {

  const [cateto1, setCateto1] = useState("")
  const [cateto2, setCateto2] = useState("")
  const [resultado, setResultado] = useState(0)

  return (
    <>
      <Title>
        Teorema de pitagoras
      </Title>

      {cat1(cateto1, setCateto1)}
      {cat2(cateto2, setCateto2)}
      {fcalcularhipotenusa(cateto1, cateto2, setResultado)}
      {fresultado(resultado)}

    </>
  );
}

