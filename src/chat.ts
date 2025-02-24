export function createConnection({ serverUrl, roomId }) {
  if (typeof serverUrl !== 'string') {
    throw Error('Error: serverUrl')
  }
  if (typeof roomId !== 'string') {
    throw Error('Error: roomId')
  }
  let intervalId
  let messageCallback
  return {
    connect() {
      clearInterval(intervalId)
      intervalId = setInterval(() => {
        if (messageCallback) {
          if (Math.random() > 0.5) {
            messageCallback('hey')
          } else {
            messageCallback('lol')
          }
        }
      }, 3000)
    },
    disconnect() {
      clearInterval(intervalId)
      messageCallback = null
    },
    on(event, callback) {
      if (messageCallback) {
        throw Error('Error: messageCallback')
      }
      if (event !== 'message') {
        throw Error('Error: event message')
      }
      messageCallback = callback
    },
  }
}