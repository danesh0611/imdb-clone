import React from 'react'
import icon from '../assets/icon.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-2">
        <img  className = "w-[50px] "src={icon }/>
        <Link to='/' className='text-green-700 text-3xl font-bold' >Movies</Link>
        <Link to='/Watchlist' className='text-green-700 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar