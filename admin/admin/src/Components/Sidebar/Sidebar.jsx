import React, { useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [menu, setMenu] = useState("")
    return (
        <div className='Sidebar'>
            <div className="Sidebar-content">
                <div className="Add-item">
                    <Link to={`/add`} onClick={() => setMenu("Add")}>
                        <div className="wrapper">
                            <div className={menu === "Add" ? "active" : ""}></div>
                            <img src={assets.add} alt={assets.add} />
                            <p>Add Item</p>
                        </div>
                    </Link>
                </div>
                <hr></hr>
                <div className="List-item">

                    <Link to={`/list`} onClick={() => setMenu("List")}>
                        <div className="wrapper">
                            <div className={menu === "List" ? "active" : ""}></div>
                            <img src={assets.list} alt={assets.list} />
                            <p>List Items</p>
                        </div>
                    </Link>

                </div>
                <hr></hr>
                <div className="Order-list">

                    <Link to={`/order`} onClick={() => setMenu("Order")}>
                        <div className="wrapper">
                            <div className={menu === "Order" ? "active" : ""}></div>
                            <img src={assets.order} alt={assets.order} />
                            <p>Order List</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar