import { useEffect } from "react"
import { createConnection } from "./chat"
import { showNotification } from "./notifications"

export function useChatRoom({ serverUrl, roomId }) {
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
}