function Cup({ guest }) {
  return <h2>guest count {guest}</h2>
}

function TeaSet() {
  let cups = []
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />)
  }
  return cups
}

export default TeaSet
