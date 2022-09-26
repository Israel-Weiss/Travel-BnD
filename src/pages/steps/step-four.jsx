import { uploadImage } from '../../services/upload.service.js'
import { useState } from 'react'
import { useEffect } from 'react'
import goBackIcon from '../../assets/imgs/go-back-icon.png'

export const StepFour = ({ setStep, setStayForm, stayForm ,createStay}) => {

   var [imgUrls, setImgUrls] = useState([])

    var uploadImg = async (ev) => {
        ev.preventDefault()
        var secure_url = await uploadImage(ev)
 
        setImgUrls([...imgUrls,secure_url])
        console.log(imgUrls,"step 1");
    }

    const setForm = (ev) => {
        ev.preventDefault()
        setStayForm({...stayForm,imgUrls: imgUrls})
        console.log(imgUrls,"step 2");
        stayForm= ({...stayForm,imgUrls: imgUrls})
        createStay(stayForm)
    }

    return (
        <form className="step-four" onSubmit={(event) => setForm(event)}>
                 <img className='go-back' src={goBackIcon} style={{ width: "45px" }} onClick={()=> setStep(3)} />
            <label htmlFor="imgUpload">{(event) => uploadImg(event)}</label>
            <input className='upload-iamge' type="file" onChange={(event) => uploadImg(event)} accept="img/*" id="imgUpload" />

            {/* <div className="img-container"> */}
                {imgUrls.length >= 1 &&
                    <section className='img-container-grid'>
                        <img className='grid-area-a' src={imgUrls[0]&&imgUrls[0]} style={{gridArea:"a"}} />
                        <img className='grid-area b upload-img' src={imgUrls[0]&&imgUrls[1]} style={{gridArea:"b"}}/>
                        <img className='grid-area c upload-img' src={imgUrls[0]&&imgUrls[2]} style={{gridArea:"c"}}/>
                        <img className='grid-area d upload-img' src={imgUrls[0]&&imgUrls[3]} style={{gridArea:"d"}}/>
                        <img className='grid-area e upload-img' src={imgUrls[0]&&imgUrls[4]} style={{gridArea:"e"}}/>
                    </section>
                }
            {/* </div> */}

            <button className="next-btn">Next</button>

        </form>

    )


}