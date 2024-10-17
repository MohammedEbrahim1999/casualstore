'use client'
import React, { useState } from 'react'
import Main from './HomeComponent/Main/Main.jsx';
import ProductsItems from './HomeComponent/Products/Products.jsx';
import Header from './Component/Header/Header.jsx';
const page = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(prevCount => prevCount + 1);

  return (
    <>
      <Header count={count}/>
      <Main />
      <ProductsItems incrementCount={incrementCount}/>
    </>
  )
}

export default page
