import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    description: '',
    company: '',
    price: '',
    type: '',
    image: ''
  })

  const onchangehandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const onsubmithandler = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("company", data.company)
    formData.append("price", Number(data.price))
    formData.append("type", data.type)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/product/add`, formData)
    if (response.data.success) {
      toast.success(response.data.message)
      setData({
        name: '',
        description: '',
        company: '',
        price: '',
        type: '',
        image: ''
      })
      setImage(false)
    }
    else {
      toast.error(response.data.message)
    }
  }
  return (
    <div className='Add-container'>
      <form onSubmit={onsubmithandler}>
        <p className='title'>Add Items</p>
        <div className="image-upload-container">
          <label htmlFor="file-input">
            <div className="upload-area">
              <div className="upload-area-inner">
                <p>Upload Picture</p>
                <img src={image ? URL.createObjectURL(image) : assets.dot} alt="" />
              </div>
            </div>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="file-input" hidden />
          </label>
        </div>
        <div className="product-name-input">
          <input name="name" onChange={onchangehandler} value={data.name} type="text" placeholder="Product Name" required />
        </div>
        <div className="product-description-input">
          <textarea type="text" name="description" onChange={onchangehandler} value={data.description} placeholder="Product Description" required />
        </div>
        <div className="product-company-input">
          <input name="company" onChange={onchangehandler} value={data.company} type="text" placeholder='Company' required />
        </div>
        <div className="product-price-input">
          <input name="price" onChange={onchangehandler} value={data.price} type="number" placeholder='Price' required />
        </div>
        <div className="product-type-input">
          <input name="type" onChange={onchangehandler} value={data.type} type="text" placeholder='Type' required />
        </div>
        <div className="button">
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Add