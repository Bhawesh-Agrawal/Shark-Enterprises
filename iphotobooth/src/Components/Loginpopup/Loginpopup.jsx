import React, { useContext, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assest'
import { StoreContext } from '../../Context/Storecontext'
import axios from "axios"
import ImageCropper from '../ImageCropper/ImageCropper'

const Loginpopup = ({ setshowLogin }) => {

    const [image, setImage] = useState(false)
    const [currentState, setcurrentState] = useState("Login In")
    const {onCropDone, onCropCancel, imgAfterCrop, setImgAfterCrop} = useContext(StoreContext)
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        name: "",
        email: "",
        password: "",
        image: ""
    })

    const { url, setToken } = useContext(StoreContext)

    const onchangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onsubmithandler = async (event) => {
        event.preventDefault()

        if (currentState == "Sign Up") {
            const formData = new FormData();
            formData.append("firstname", data.firstname)
            formData.append("lastname", data.lastname)
            formData.append("email", data.email)
            formData.append("name", data.name)
            formData.append("password", data.password)
            if (imgAfterCrop) {
                const imgFileData = new File([imgAfterCrop], 'image.jpeg' , {type:'image/jpeg'}) 
                formData.append("image", imgFileData);
            }
            const response = await axios.post(`${url}/api/user/register`, formData)
            if (response.data.success) {
                setData({
                    firstname: '',
                    lastname: '',
                    name: '',
                    email: '',
                    password: '',
                    image: ''
                })
                setImage(false)
                setImgAfterCrop("")
                setcurrentState("Login In")
                alert("Registered Successfully")
            }
            else {
                alert(response.data.message)
            }
        }

        else {
            const response = await axios.post(`${url}/api/user/login`, { "email": data.email, "password": data.password })
            if (response.data.success) {
                setData({
                    email: '',
                    password: '',
                })
                setImage(false)
                setToken(response.data.token)
                console.log(response.data.token)
                localStorage.setItem("token", response.data.token)
                setshowLogin(false)
            }
            else {
                alert(response.data.message)
            }
        }
    }

    const setimage = ()=>{
        setImage(false)
    }

    return (
        <div className='Loginpopup'>
            <form onSubmit={onsubmithandler} className="loginpopup">
                <div className="cross-button">
                    <img onClick={() => setshowLogin(false)} src={assets.cross} alt='cross'></img>
                </div>
                {currentState === 'Sign Up' ?
                    <div className="login-form">
                        <div className="login-popup-title">
                            <h1>{currentState}</h1>
                        </div>
                        <div className="login-form-input">
                            <label htmlFor="file-input">
                                <div className="">
                                    <div className="profile-upload">
                                        <img src={imgAfterCrop?URL.createObjectURL(imgAfterCrop):assets.user} alt="user" />
                                    </div>
                                </div>
                                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="file-input" hidden disabled = {image}/>
                                {image?<div className="edit-img">
                                    <ImageCropper image={URL.createObjectURL(image)} onCropDone={onCropDone} onCropCancel={onCropCancel}  setimage = {setimage}/>
                                </div>:<></>}
                            </label>
                            <div className="login-text-area">
                                <div className="name-area">
                                    <input name="firstname" value={data.firstname} onChange={onchangeHandler} type="text" placeholder='First Name' required />
                                    <input name="lastname" value={data.lastname} onChange={onchangeHandler} type="text" placeholder='Last Name' id='lastname' required />
                                </div>
                                <input name="email" value={data.email} onChange={onchangeHandler} type="email" placeholder='Email' required />
                                <input name="name" value={data.name} onChange={onchangeHandler} type="text" placeholder='Username' required />
                                <input name="password" value={data.password} onChange={onchangeHandler} type="password" placeholder='Password' required />
                                
                                    <div className="checkbox">
                                        <input type='checkbox' id='checkbox' required />
                                        <label>I hereby declare all the details provided are correct and I will be responsible if any details are found to be wrong.</label>
                                    </div>
                                <button type="submit">{currentState} </button>
                                <p>Account already Exists?<span onClick={() => setcurrentState("Login In")}> Login In</span></p>
                            </div>
                        </div>
                    </div> :
                    <div className="sign-in">
                        <div className="login-popup-title">
                            <h1>{currentState}</h1>
                        </div>
                        <div className="sign-in-input">
                            <input name="email" value={data.email} onChange={onchangeHandler} type="email" placeholder='Email' required />
                            <input name="password" value={data.password} onChange={onchangeHandler} type="password" placeholder='Password' required ></input>
                            <button type="submit">{currentState}</button>
                            <p>Create new account?<span onClick={() => setcurrentState("Sign Up")}>Click here</span></p>

                        </div>
                    </div>
                }
            </form>
        </div>
    )
}

export default Loginpopup