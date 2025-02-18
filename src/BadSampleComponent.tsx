import { useEffect, useMemo, useState, useSyncExternalStore } from "react"

// Bad
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    function updateState() {
      setIsOnline(navigator.onLine)
    }

    updateState()

    window.addEventListener('online', updateState)
    window.addEventListener('offline', updateState)
    return () => {
      window.removeEventListener('online', updateState)
      window.removeEventListener('offline', updateState)
    }
  }, [])
  return isOnline
}

function ChatIndecator() {
  const isOnline = useOnlineStatus()
}

// Better
function subscribe(callback) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  )
}

function ChatIndicator() {
  const isOnline = useOnlineStatus()
}
