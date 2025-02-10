import { useEffect } from "react"

function createConnection() {
  return {
    connect() {
      console.log('connecting...')
    },
    disconnect() {
      console.log('Disconnected...')
    }
  }
}

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection()
    connection.connect()
    return () => {
      connection.disconnect()
    }
  }, [])
  return <h2>welcome to chat</h2>
}

export default ChatRoom
