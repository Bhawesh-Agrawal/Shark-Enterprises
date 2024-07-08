import React, { useContext } from 'react'
import "./ProductItem.css"
import { Link } from "react-router-dom";
import { StoreContext } from '../../Context/Storecontext';

const ProductItem = ({id, name, image, price, description, company}) => {
  const {url} = useContext(StoreContext)
  return (
    <div className='Product'>
        <div className="Product-img">
          <Link to = {`/product/${id}`}>
            <img src={`${url}/images/` + image} alt={image} />
          </Link>
        </div>
        <div className="Product-name">
            <p>{name}</p>
        </div>
        <div className="Product-price">
            <p> &#x20b9; {price}</p>
        </div>
    </div>
  )
}

export default ProductItem