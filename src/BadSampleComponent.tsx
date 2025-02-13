import { useEffect, useState } from "react"

// Bad
function Form() {
  const [firstName, setFirstName] = useState('Taylor')
  const [lastName, setLastName] = useState('Swift')

  const [fullName, setFullName] = useState('')
  useEffect(() => {
    setFullName(firstName + ' ' + lastName)
  }, [firstName, fullName])
}

// ToBe
function Form() {
  const [firstName, setFirstName] = useState('Taylor')
  const [lastName, setLastName] = useState('Swift')

  const fullName = firstName + ' ' + lastName
}
