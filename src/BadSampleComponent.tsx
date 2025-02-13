import { useEffect, useState } from "react"

// Bad
function TodoList({todos, filter}) {
  const [newTodo, setNewTodo] = useState('')

  const [visibleTodos, setVisibleTodos] = useState([])
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter))
  }, [todos, filter])
}

// ToBe
function TodoList({todos, filter}) {
  const [newTodo, setNewTodo] = useState('')

  const visibleTodos = getFilteredTodos(todos, filter)
}
