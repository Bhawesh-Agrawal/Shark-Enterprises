import React, { useContext, useEffect, useState } from 'react'
import './Order.css'
import { StoreContext } from '../../Context/Storecontext'
import axios from 'axios'
import { assets } from '../../assets/assest'

const Order = () => {

    const { url, token, productDetail } = useContext(StoreContext)
    const [data, setData] = useState([])

    const fetchOrder = async () => {
        const response = await axios.post(url + "/api/order/userorder", {}, { headers: { token } })
        setData(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrder()
        }
    }, [token])

    return (
        <div className='order-container'>
            <div className="order-title">
                <p>My Order</p>
            </div>
            <div className="order-container">
                {data.map((order, index) => {
                    return (
                        <div className="myordercart" key={index}>
                            <img src={assets.shopping} alt={assets.shopping}/>
                            <p>{order.items.map((item,index)=>{
                                if (index === order.items.length - 1) {
                                    return item.name+" x "+item.quantity
                                }else{
                                    return item.name + " x " + item.quantity + ","
                                }
                            })}</p>
                            <p>&#x20b9; {order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf; </span><b>{order.status}</b></p>
                            <button onClick={fetchOrder}>Track Order</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Order