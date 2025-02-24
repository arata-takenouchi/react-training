import { useEffect, useState } from "react";
import { showNotification } from "./notifications";
import { createConnection } from "./chat";

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl]  = useState('https://localhost:1234')

  useEffect(() => {
    const options = {
      serverUrl,
      roomId,
    }
    const connection = createConnection(options)
    connection.on('message', (msg) => {
      showNotification('New message: ' + msg)
    })
    connection.connect()
    return () => connection.disconnect()
  }, [roomId, serverUrl])

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>chatroom no: {roomId}</h1>
    </>
  )
}

