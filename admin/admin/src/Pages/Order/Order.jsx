import React, { useState, useEffect } from 'react';
import './Order.css';
import axios from "axios";
import { assets } from '../../assets/assets';

const Order = ({ url }) => {
  const [orders, setOrder] = useState([]);

  const fetchOrder = async () => {
    const response = await axios.get(`${url}/api/order/listorder`);
    if (response.data.success) {
      setOrder(response.data.data);
      console.log(response.data.data);
    } else {
      alert(response.data.message);
    }
  };

  const statusHandler = async (event,orderId)=>{
    const response = await axios.post(`${url}/api/order/updatestatus`,{orderId,status:event.target.value})
    if(response.data.success){
      await fetchOrder()
    }
  }
  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="order add">
      <h3>Order</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.order} alt="" />
            <div>
              <p className="order-item-product">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return `${item.name} x ${item.quantity}`;
                  } else {
                    return `${item.name} x ${item.quantity}, `;
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstname} {order.address.lastname}</p>
              <p className="order-item-address">{order.address.Address}, {order.address.City}, {order.address.Province}, {order.address.Pincode}</p>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>Amount : &#x20b9; {order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value ={order.status} >
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;