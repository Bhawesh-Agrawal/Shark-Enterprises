import React from 'react'
import { assets } from '../../assets/assest'
import "./Header.css"

const Header = () => {
  return (
    <div className='banner1'>
        <div className="banner1-img">
            <img src={assets.banner1} alt="Pentonic Pen with three humans holding it"></img>
            <p>The Best Product at <span>The Best Price</span></p>
        </div>

    </div>
  )
}

export default Header