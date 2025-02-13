import { useEffect, useMemo, useState } from "react"

// Bad
function ProfilePage({ userId }) {
  const [comment, setComment] = useState('')

  useEffect(() => {
    setComment('')
  }, [userId])
}

// ToBe
function ProfilePage({ userId }) {
  return (
    <Profile
      userId={userId}
      key={userId}
    />
  )
}

function Profile({ userid }) {
  const [comment, setComment] = useState('')
}
