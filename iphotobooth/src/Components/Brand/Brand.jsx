import React from 'react'
import './Brand.css'
import { brand_logo } from '../../assets/assest'

const Brand = () => {
    const pilot_logo = '/src/assets/logo/Pilot%20logo.png'
  
    return (
    <div className='brand-area'>
        <div className="heading">
            <h3>Our Brand Partners</h3>
        </div>
        <div className="logo-list">
                {brand_logo.map((item,index)=>{
                    return(
                        <div key={index} className="logo-list-img">
                            <img className = {item.logo_img === pilot_logo?"pilot":""} src={item.logo_img} alt=""></img>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default Brand