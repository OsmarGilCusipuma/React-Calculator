import Header from "./components/Header"
import Button from "./components/Button"
import {useState, useEffect} from "react"
import {formatMoney, calculateDebt} from "./utils"

function App() {

  const [quantity, setQuantity] = useState(10000)
  const [term, setTerm] = useState(6)
  const [debt, setDebt] = useState(0)
  
  useEffect(()=>{
    setDebt(calculateDebt(quantity,term))
  }, [quantity,term])

  const min = 0
  const max = 20000
  const step = 100

  function handleChange(e){
    setQuantity(+e.target.value)
  }

  function handleClickDecrease(){
    const value = quantity - step
    if(value < min){
      console.log("error")
    } else{
      setQuantity(value)
    }
  }

  function handleClickIncrease(){
    const value = quantity + step
    if(value > max){
      console.log("error")
    } else{
      setQuantity(value)
    }
  }

  function handleTerm(e){
    setTerm(+e.target.value)
  }

  return(
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>
      <div className="flex justify-between my-6">
        <Button
          operator="-"
          fn={handleClickDecrease}
        ></Button>
        <Button
          operator="+"
          fn={handleClickIncrease}
        ></Button>
      </div>
      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        value={quantity}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatMoney(quantity)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">Elige un <span className="text-indigo-600">Plazo</span> a pagar</h2>

      <select
       className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg font-bold text-center text-xl text-gray-500"
       value={term}
       onChange={handleTerm}
       >
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="18">18 meses</option>
          <option value="24">24 meses</option>
      </select>


      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">Resumen <span className="text-indigo-600">de pagos:</span></h2>
        <p className="text-xl text-gray-500 text-center font-bold">{term} Meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(debt)} Total a pagar</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(Math.round((debt/term) * 10) / 10)} Mensuales</p>
      </div>
    </div>
  )
}
export default App



/*
NOTAS:

-"import React from 'react'" ya no es necesario en nuevas versiones
- <Header></Header> Se recomienda para componentes mas reutilizables y pasar contenido dinamico
- "+" delante del e.target.value es para convertirlo a numero
- useEffect se ejecuta siempre una vez y luego si el "[ ]" tiene un cambio
*/