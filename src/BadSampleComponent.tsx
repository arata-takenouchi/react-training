import { useEffect, useMemo, useState } from "react"

// Bad
function Game() {
  const [card, setCard] = useState(null)
  const [goldCardCount, setGoldCardCount] = useState(0)
  const [round, setRound] = useState(1)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount(c => c + 1)
    }
  }, [card])

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound(r => r + 1)
      setGoldCardCount(0)
    }
  }, [goldCardCount])

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true)
    }
  }, [round])

  useEffect(() => {
    alert('Good Game!')
  }, [isGameOver])

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw new Error('Game already ended')
    } else {
      setCard(nextCard)
    }
  }
}

// Better
function Game() {
  const [card, setCard] = useState(null)
  const [goldCardCount, setGoldCardCount] = useState(0)
  const [round, setRound] = useState(1)

  const isGameOver = round > 5

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw new Error('Game already ended')
    }

    setCard(nextCard)
    if (nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1)
      } else {
        setGoldCardCount(0)
        setRound(round + 1)
        if (round === 5) {
          alert('Good Game')
        }
      }
    }
  }
}
