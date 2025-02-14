import { useEffect, useMemo, useState } from "react"

// Bad
function List({items}) {
  const [isReverse, setIsReverse] = useState(false)
  const [selection, setSelection] = useState(null)

  useEffect(() => {
    setSelection(null)
  }, [items])
}

// Better
function List({items}) {
  const [isReverse, setIsReverse] = useState(false)
  const [selection, setSelection] = useState(null)

  const [prevItems, setPrevItems] = useState(items)
  if (items !== prevItems) {
    setPrevItems(items)
    setSelection(null)
  }
}

// Best
function List({items}) {
  const [isReverse, setIsReverse] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const selection = items.find(item => item.id === selectedId) ?? null
}
