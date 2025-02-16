import { useEffect, useMemo, useState } from "react"

// Bad
function App() {
  useEffect(() => {
    loadDataFromLocalStorage()
    checkAuthToken()
  }, [])
}

// Better
let didInit = false
function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true
    }
    loadDataFromLocalStorage()
    checkAuthToken()
  }, [])
}
