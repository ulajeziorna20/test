import React, { useState } from "react"
import "./Container.css"
import ButtonsPanel from "./ButtonsPanel"

const Container = () => {

  const [color, setColor] = useState('red')


  const changeColor = (par) => {

    if (par === 'red') {
      setColor('red')
    }

    if (par === 'blue') {
      setColor('blue')
    }

    if (par === 'green') {
      setColor('green')
    }

  }

  return (
    <div>
      <h2 className={color}>title</h2>
      <ButtonsPanel colorMethod={changeColor}/>
    </div>
  )
}

export default Container
