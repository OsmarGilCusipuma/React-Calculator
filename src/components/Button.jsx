import React from 'react'

function Button( {operator,fn} ) {
  return (
    <button
    type="button"
    className = "w-9 h-9 font-semibold text-xl bg-lime-500 rounded-full text-white hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
    onClick={fn}
    >{operator}</button>
  )
}

export default Button
