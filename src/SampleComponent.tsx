function Gallery() {
  return (
    <section>
      <h2>Gallery</h2>
      <Image />
      <Image />
      <Image />
    </section>
  )
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  )
}

export default Gallery
