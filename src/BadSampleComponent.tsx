import { useEffect, useMemo, useState } from "react"

// Bad
function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    post('/analytics/event', {  eventName: 'visit_form' })
  }, [])

  const [jsonToSubmit, setJsonToSubmit] = useState(null)
  useEffect(() => {
    if (jsonToSubmit !== null) {
      post('/api/register', jsonToSubmit)
    }
  }, [jsonToSubmit])

  function handleSubmit(e) {
    e.preventDefault()
    setJsonToSubmit({ firstName, lastName })
  }
}

// Better
function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    post('/analytics/event', {  eventName: 'visit_form' })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    post('/api/register', { firstName, lastName })
  }
}
