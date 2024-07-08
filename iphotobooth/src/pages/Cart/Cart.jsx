import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/Storecontext'
import { assets } from '../../assets/assest'
import './Cart.css'
import React, { useContext } from 'react'

const Cart = () => {

    const { cartItems, productDetail, removecartItems, getTotalCartAmount,url } = useContext(StoreContext)
    const navigate = useNavigate()

    const proceed = () => {
        if (getTotalCartAmount() <= 0) {
        } else {
          navigate(`/Checkout`);
        }
      }
    

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Qunatity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br>
                </br>
                <hr />
                {productDetail.map((item) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <>
                                <div key = {item._id} className="cart-items-title cart-items-items">
                                    <img className="product-img" src={`${url}/images/${item.image}`} alt={item.image} />
                                    <p>{item.name}</p>
                                    <p> &#x20b9; {item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p> &#x20b9; {item.price * cartItems[item._id]}</p>
                                    <img onClick={() => removecartItems(item._id)} className="dustbin" src={assets.dustbin} alt="dustbin" />
                                </div>
                                <hr />
                            </>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p> &#x20b9; {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Discount</p>
                            <p> &#x20b9; {0}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b> &#x20b9; {getTotalCartAmount() - 0}</b>
                        </div>
                    </div>
                    <button onClick= {proceed}>Proceed to Check</button >
                </div>
            </div>
        </div>
    )
}

export default Cart