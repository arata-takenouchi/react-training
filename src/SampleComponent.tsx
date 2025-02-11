import { useEffect, useState } from "react";

function PlayGround() {
  const [text, setText] = useState('a')

  useEffect(() => {
    function onTimeout() {
      console.log('time: ' + text)
    }

    console.log('schedule ' + text + ' log')
    const timeoutId = setTimeout(onTimeout, 3000)

    return () => {
      console.log('cancel ' + text + ' log')
      clearTimeout(timeoutId)
    }
  }, [text])

  return (
    <>
      <label>
        What to log:{' '}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  )
}

function Sample() {
  const [show, setShow] = useState(false)
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Unmount' : 'Mount' }
      </button>
      {show && <hr />}
      {show && <PlayGround />}
    </>
  )
}

export default Sample
