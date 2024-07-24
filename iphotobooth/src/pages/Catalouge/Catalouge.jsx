import React from 'react'
import './Catalouge.css'
import { assets } from '../../assets/assest'

const Catalouge = () => {
    return (
        <div className="div-container">
            <div className="header-1">
                <h1>Our Catalouge</h1>
            </div>
            <iframe id="PDF" src={assets.catalouge} frameborder="0"></iframe>
        </div>
    )
}

export default Catalouge