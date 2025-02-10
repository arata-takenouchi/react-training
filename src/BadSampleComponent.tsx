function Cup({ guest }) {
  return <h2>guest count {guest}</h2>
}

function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  )
}

export default TeaSet
