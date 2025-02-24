import { useState } from "react"
import { useChatRoom } from "./useChatRoom"

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl]  = useState('https://localhost:1234')

  useChatRoom({
    roomId,
    serverUrl,
  })

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

