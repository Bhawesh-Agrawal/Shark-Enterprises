import React, { useState } from 'react'
import Cropper from "react-easy-crop"
import "./ImageCropper.css"

const ImageCropper = ({ image, onCropDone, onCropCancel, setimage}) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null)
    const [aspectRatio, setAspectRatio] = useState(1 / 1)
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels)
    }

    const onAspectRatioChange = (event) => {
        setAspectRatio(event.target.value)
    }

    const onSubmitHandler = ()=>{
        onCropDone(croppedArea, image)
        setimage()
    }
    return (
        <div>
            <div className='cropper'>
                <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspectRatio={aspectRatio}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    cropSize={{width:500,height:500}}
                    cropShape='round'
                    style={{
                        containerStyle: {
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#fff",
                            objectFit:"contain"
                        }
                    }}
                />
            </div>
            <div className="btn-container-img">
                <button>Cancel</button>
                <button  onClick={onSubmitHandler}>Crop & Apply</button>
            </div>
        </div >
    )
}

export default ImageCropper