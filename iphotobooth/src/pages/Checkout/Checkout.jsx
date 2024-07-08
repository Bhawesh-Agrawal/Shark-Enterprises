import React, { useContext, useEffect, useState } from 'react'
import './Checkout.css'
import { StoreContext } from '../../Context/Storecontext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

  const { getTotalCartAmount,token,productDetail,url,cartItems } = useContext(StoreContext)
  const [data,setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    Address:"",
    Pincode:"",
    Province:"",
    City:"",
    phone:""
  })


  const navigate = useNavigate()

  useEffect(()=>{
    if(!token){
      navigate('/cart')
      toast.error("Sign In Required")
    }else if(getTotalCartAmount()==0){
      navigate('/cart')
      toast.error("Cart is Empty")
    }
  },[token]
  )



  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event)=>{
    event.preventDefault()
    let orderitems = [];
    productDetail.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]
        orderitems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items : orderitems,
      amount:getTotalCartAmount()
    }
    let response = await axios.post(url+"/api/order/placeorder",orderData,{headers:{token}});
    if (response.data.success) {
      toast(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }

  return (
    <div>
      <div className="Checkout-heading">
        <p>Checkout</p>
      </div>
      <div className="form-order">
        <div className="form">
          <form onSubmit={placeOrder}>
            <div className="cust-name">
              <input name="firstname" value={data.firstname} onChange={onChangeHandler} type="text" placeholder='First Name' required />
              <input name="lastname" value={data.lastname} onChange={onChangeHandler} type="text" placeholder='Last Name' required/>
            </div>
            <div className="cust-phoneno">
              <input name="phone" value={data.phone} onChange={onChangeHandler} type="tel" placeholder='Phone-Number' required  />
            </div>
            <div className="cust-email">
              <input name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder='Email' required/>
            </div>
            <div className="cust-address">
              <input name="Address" value={data.Address} onChange={onChangeHandler} type="text" placeholder='Address' required/>
              <input name="Pincode" value={data.Pincode} onChange={onChangeHandler} type="text" placeholder='Pincode' required/>
              <input name="Province" value={data.Province} onChange={onChangeHandler} type="text" placeholder='Province'required />
              <input name="City" value={data.City} onChange={onChangeHandler} type="text" placeholder='City'required />
            </div>
            <button type='submit'>Place Order</button>
          </form>
          <div className="order-details">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout