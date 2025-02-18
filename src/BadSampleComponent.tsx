import { useEffect, useMemo, useState } from "react"

// Bad
function Parent() {
  const [data, setData] = useState(null)
  return <Child onFetched={setData} />
}

function Child({ onFetched }) {
  const data = useSomeAPI()

  useEffect(() => {
    if (data) {
      onFetched(data)
    }
  }, [onFetched, data])
}

// Better
function Parent() {
  const data = useSomeAPI()
  return <Child data={data} />
}

function Child({ data }) {

}
