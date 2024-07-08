import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'


const List = ({url}) => {
  
    useEffect(()=>{
      fetchlist()
    },[])
  const [list,setList] = useState([])
  const fetchlist = async ()=>{
    const response = await axios.get(`${url}/api/product/list`)
    console.log(response.data)
    if (response.data.success) {
      setList(response.data.data)
    }
    else{
      toast.error(response.data.message)
    }
  } 

  const removeitem = async (food_id)=>{
    const response = await axios.post(`${url}/api/product/remove`,{id:food_id})
    console.log(response.data)
    if (response.data.success) {
      toast.success(response.data.message)
      fetchlist()
    }
    else{
      toast.error(response.data.message)
    }
  }

  return (
    <div className='list-container'>
      <div className="list-title">
        <p className='title'>All Product List</p>
        <div className="product-list-container">
          <div className="product-list-title">
            <b>Image</b>
            <b>Name</b>
            <b>Company</b>
            <b>Type</b>
            <b>Price</b>
            <b>Delete</b>
          </div>
          <div className="product-list">
            {list.map((item,index)=>{
              return(
                <div className="product-list-item" key={index}>
                  <img src={`${url}/images/`+item.image} alt={item.image}></img>
                  <p>{item.name}</p>
                  <p>{item.company}</p>
                  <p>{item.type}</p>
                  <p> &#x20b9; {item.price}</p>
                  <img onClick = {()=>removeitem(item._id)} src={assets.dustbin} alt={assets.dustbin} style={{width:"35px", alignItems:"center", cursor:"pointer"}} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List