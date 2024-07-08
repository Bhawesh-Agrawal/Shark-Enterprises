import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../Context/Storecontext'
import ProductItem from '../ProductItem/ProductItem'

const ProductDisplay = () => {

  const {productDetail} = useContext(StoreContext)
  return (
    <div className='product_display'>
        <h2>Top Selling Products</h2>
        <div className="product-display-list">
            {productDetail.map((item,index)=>{
                return <ProductItem key={index} id= {item._id} name = {item.name} image = {item.image} price = {item.price} description = {item.description} company = {item.company}></ProductItem>
            })}
        </div>

    </div>
  )
}

export default ProductDisplay