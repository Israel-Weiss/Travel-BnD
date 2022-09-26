
import {uploadImage } from '../services/upload.service.js'

export const ImgUploader =({setImgUrl}) => {

  const uploadImg = async (ev) => {
    ev.preventDefault()
    console.log(ev);
    const secure_url = await uploadImage(ev)
    console.log(secure_url);
    setImgUrl(secure_url)
  }

    return (
      <div className="upload-preview"  >
        <label htmlFor="imgUpload">{  (event)=>uploadImg (event) }</label>
        <input type="file" onChange={ (event)=>uploadImg (event)} accept="img/*" id="imgUpload" />
      </div>
    )
  }

