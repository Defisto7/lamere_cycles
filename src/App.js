import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About';
import BikeCategory from './components/BikeCategory';
import Product from './components/Product';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar />
      <About />
      <BikeCategory/>
      <Product />
    </div>
  )
}

export default App