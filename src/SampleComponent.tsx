import { useEffect, useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{ number }</h1>
      <button onClick={() => {
        // setNumber(number + 1)
        // setNumber(number + 1)
        // setNumber(number + 1)

        // queue
        // setNumber(n => n + 1)
        // setNumber(n => n + 1)
        // setNumber(n => n + 1)

        setNumber(number + 5)
        setNumber(n => n + 1)
        setNumber(42)
      }}>
        +
      </button>
    </>
  )
}