const ButtonsPanel = (props) => {
  return (
    <div>
      <button onClick={() => props.colorMethod("red")}>red</button>
      <button onClick={() => props.colorMethod("blue")}>blue</button>
      <button onClick={() => props.colorMethod("green")}>green</button>
    </div>
  )
}

export default ButtonsPanel
