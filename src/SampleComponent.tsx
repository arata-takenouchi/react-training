import { useEffect, useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0)

  const [person, setPerson] = useState({
    name: 'name',
    artwork: {
      title: 'title',
      image: 'image'
    }
  })
  setPerson({
    ...person,
    artwork: {
      ...person.artwork,
      image: 'image2'
    }
  })

  const [artists, setArtists] = useState([
    {
      id: 1,
      name: 'name1'
    },
    {
      id: 2,
      name: 'name2'
    },
    {
      id: 3,
      name: 'name3'
    },
  ])

  function handleClick() {
    const insertAt = 1
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: artists.length + 1, name: `name${artists.length + 1}` },
      ...artists.slice(insertAt)
    ]
    setArtists(nextArtists)
  }

  // array mutation
  // Bad
  function handleToggleList(targetId, nextValue) {
    const nextList = [...list]
    const artwork = nextList.find(a => a.id === targetId)
    artwork.seen = nextValue
    setList(nextList)
  }
  // Good
  function handleToggleList(targetId, nextValue) {
    setList(FileList.map(artwork => {
      if (artwork.id === targetId) {
        return { ...artwork, seen: nextValue }
      } else {
        return artwork
      }
    }))
  }

  return (
    <>
      <h1>{ number }</h1>
      <button onClick={() => {
        // setNumber(number + 1)
        // setNumber(number + 1)
        // setNumber(number + 1)

        // queue
        // setNumber(n => n + 1)
        // setNumber(n => n + 1)
        // setNumber(n => n + 1)

        setNumber(number + 5)
        setNumber(n => n + 1)
        setNumber(42)
      }}>
        +
      </button>
    </>
  )
}