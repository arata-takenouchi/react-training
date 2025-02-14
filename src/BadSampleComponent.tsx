import { useEffect, useMemo, useState } from "react"

// Bad
function ProductPage({ product, addToCart }) {
  useEffect(() => {
    if (product.isInCart) {
      showNotification(`Added ${product.name} to cart`)
    }
  }, [product])

  function handleBuyClick() {
    addToCart(product)
  }

  function handleCheckoutClick() {
    addToCart(product)
    navigateTo('/checkout')
  }
}

// Better
function ProductPage({ product, addToCart }) {
  function buyProduct() {
    addToCart(product)
    showNotification(`Added ${product.name} to cart`)
  }

  function handleBuyClick() {
    buyProduct(product)
  }

  function handleCheckoutClick() {
    buyProduct(product)
    navigateTo('/checkout')
  }
}
