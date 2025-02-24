// import { useEffect, useState } from "react"
import { useState } from "react"
import { useFormInput } from "./useFormInput"
import ChatRoom from './ChatRoom';

export default function Sample() {
  const [roomId, setRoomId] = useState('general')
  return (
    <>
      <label>
        chat room: {' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  )
}