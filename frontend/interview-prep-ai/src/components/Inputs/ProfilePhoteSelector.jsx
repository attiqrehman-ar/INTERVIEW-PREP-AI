import React, { useState } from 'react';
import{LuUser, LuUpload, LuTrash } from "react-icons/lu";


const ProfilePhoteSelector = ({ image, setImage, preview, setPreview}) => {

    const inputRef= useRef(null);
    const [previewUrl, setPreviewUrl] =useState(null);

    const handleImageChange =(event)=>{
        const file =event.target.files[0];
        if(file){
            setImage(file);
            const preview =URL.createObjectURL(file);
            if(setPreview){
                setPreview(preview)
            }
            setPreviewUrl(preview);
        }
    };
    // const handleRemoveImage=
  return (
    <div>ProfilePhoteSelector</div>
  )
}

export default ProfilePhoteSelector