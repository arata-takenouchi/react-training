import { useEffect, useState } from "react"

const roomId = 'general'
const serverUrl = 'https://localhost:1234'

// export default function ChatRoom({ roomId }) {
export default function ChatRoom() {
  // const [serverUrl, setServerUrl] = useState('https://localhost:1234')

  // useEffect(() => {
  //   logVisit(roomId)
  // }, [roomId])

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => {
      connection.disconnect()
    }
  }, [])
  // }, [roomId, serverUrl])
}