import React from 'react'
import Products from './Products'
import Navbar from './Navbar'
import Footer from "./Footer";

const Prod = () => {
  return (
    <div className='prod'>
        <Navbar/>
        <hr className="hira"/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Prod;