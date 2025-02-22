// import { useEffect, useState } from "react"
import { useFormInput } from "./useFormInput"

export default function Form() {
  // const [firstName, setFirstName] = useState('Mary')
  // const [lastName, setLastName] = useState('Poppins')
  const firstNameProps = useFormInput('Mary')
  const lastNameProps = useFormInput('Poppins')

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>{firstNameProps.value} {lastNameProps.value}</p>
    </>
  )
}