import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/Storecontext';
import axios from "axios"
import { assets } from '../../assets/assest';
import "./Profile.css"
import ImageCropper from '../../Components/ImageCropper/ImageCropper';

const Profile = () => {

    const { url, token, setImgAfterCrop, imgAfterCrop, onCropDone, onCropCancel } = useContext(StoreContext)
    const [list, setList] = useState([]);
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState(false)
    const [pass, setpass] = useState(false)
    const [data, setData] = useState({
        oldpassword: "",
        password: "",
        confirmpassword: "",
    })


    const close = () => {
        setOpen(false)
        setImage(false)
    }

    const onchangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const handleImageUpload = async (event) => {
        event.preventDefault();
        const file = imgAfterCrop; // Get the selected file from the state
        if (!file) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData()
        if (imgAfterCrop) {
            const imgFileData = new File([imgAfterCrop], 'image.jpeg', { type: 'image/jpeg' })
            formData.append("image", imgFileData);
        }
        formData.append("email", list[0].email)

        const response = await axios.patch(`${url}/api/user/updateUser`, formData);
        if (response.data.success) {
            alert(response.data.message);
            setOpen(false);
            setImage(false);
            setImgAfterCrop("")
        } else {
            alert(response.data.message);
            setOpen(false);
            setImage(false);
        }
    };

    const handlePasswordUpdate = async (event) => {
        event.preventDefault()
        if (data.oldpassword !== list[0].password) {
            alert("Old Password Doesn't match");
            return;
        }
        if (data.oldpassword === data.password) {
            alert("New password cannot be the same as the old password");
            return;
        }
        if (data.password !== data.confirmpassword) {
            alert("New password and confirm password do not match");
            return;
        }
        const response = await axios.patch(`${url}/api/user/updatePass`, { "password": data.password }, { headers: { token } })
        if (response.data.success) {
            alert(response.data.message)
            setpass(false);
        } else {
            alert(response.data.message)
        }
    }

    useEffect(() => {
        const fetch = async () => {
            await fetchList(localStorage.getItem("token"));
        };
        fetch();
    }, [token]);

    const fetchList = async (token) => {
        try {
            const response = await axios.get(`${url}/api/user/profile`, { headers: { token } });
            if (response.data.success) {
                setList(response.data.data || []);
            } else {
                console.error("Error fetching list:", response.data.message);
                setList([]);
            }
        } catch (error) {
            console.error("Error fetching list", error);
            setList([]);
        }
    };

    const setimage = () => {
        setImage(false)
    }

    return (
        <div className="profile-container">
            {list.map((item, index) => {
                return (
                    <>
                        <div onClick={() => (setOpen(true))} className="profile-img-cont">
                            <img src={item.image.url} className='profile-img-1' />
                            <div className="edit">
                                <img src={assets.pencil} alt="" />
                            </div>
                        </div>
                        {!open ? <></> :
                            <div className="back">
                                <p onClick={close} className='close'>x</p>
                                <div className="change-profile">
                                    <form onSubmit={handleImageUpload}>
                                        <div className="prof-container">
                                            {imgAfterCrop ? <img src={URL.createObjectURL(imgAfterCrop)} alt="" /> : ""}
                                            <input type='file' onChange={(e) => setImage(e.target.files[0])} className='input-file' disabled={image} required></input>
                                            {image ? <div className="edit-img-img">
                                                <ImageCropper image={URL.createObjectURL(image)} onCropDone={onCropDone} onCropCancel={onCropCancel} setimage={setimage} />
                                            </div> : <></>}
                                            <p>Upload Picture</p>
                                        </div>
                                        <div className="button">
                                            <button type='submit'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                        <div className="profile-detail">
                            <div className="name">
                                <div className="first-name">
                                    <p><span>{item.firstname}</span></p>
                                </div>
                                <div className="last-name">
                                    <p><span>{item.lastname}</span></p>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="username">
                                <p><span>{item.name}</span></p>
                            </div>
                            <hr />
                            <div className="email">
                                <p><span>{item.email}</span></p>
                            </div>
                            <div className="change-password">
                                <button onClick={() => { setpass(true) }}>Change Password</button>
                                {!pass ? <></> :
                                    <div className="back">
                                        <p onClick={() => setpass(false)} className='close'>x</p>
                                        <div className='password-popup'>
                                            <form onSubmit={handlePasswordUpdate}>
                                                <input name="oldpassword" value={data.oldpassword} onChange={onchangeHandler} type="password" placeholder='Enter Old Password' required />
                                                <input name="password" value={data.password} onChange={onchangeHandler} type='password' placeholder='Enter new password' required></input>
                                                <input name="confirmpassword" value={data.confirmpassword} onChange={onchangeHandler} type='password' placeholder='Confirm new password' required></input>
                                                <div className='button'>
                                                    <button type='submit'>Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Profile