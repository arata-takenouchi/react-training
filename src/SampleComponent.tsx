import { useEffect } from "react"

const serverUrl = 'https://localhost:1234'

export default function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => {
      connection.disconnect()
    }
  }, [roomId])
}