import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCatalog from './ProductCatalog.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>LaunchDarkly + Contentful</h1>
      <h2>Product Catalog Demo</h2>
      <ProductCatalog />
    </>
  )
}

export default App
