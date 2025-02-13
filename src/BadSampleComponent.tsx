import { useEffect, useMemo, useState } from "react"

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

  console.time('filter array')
  const visibleTodos = getFilteredTodos(todos, filter)
  console.timeEnd('filter array')
}

// more
function TodoList({todos, filter}) {
  const [newTodo, setNewTodo] = useState('')

  console.time('memo function')
  const visibleTodos = useMemo(() => {
    return getFilteredTodos(todos, filter)
  }, [todos, filter])
  console.timeEnd('memo function')
}
