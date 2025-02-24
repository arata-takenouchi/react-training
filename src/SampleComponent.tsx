import { useEffect, useState, useContext } from "react"

export default function ChatRoom({ roomId, selectedServerUrl }) {
  const settings = useContext(SettingsContext)
  const serverUrl = selectedServerUrl ?? settings.defaultServerUrl

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => {
      connection.disconnect()
    }
  }, [roomId, serverUrl])
}
