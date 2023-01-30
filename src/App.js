import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar />
      <About />
    </div>
  )
}

export default App