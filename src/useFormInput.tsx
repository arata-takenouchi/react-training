import { useState } from "react"

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    setValue(e.target.Value)
  }

  const inputProps = {
    value,
    onChange: handleChange
  }

  return inputProps
}