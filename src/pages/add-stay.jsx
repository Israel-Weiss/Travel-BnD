import { useState } from 'react'
import { useEffect } from 'react'
import { StepOne } from './steps/step-one'
import { StepTwo } from './steps/step-two'
import { StepThree } from './steps/step-three'
import { StepFour } from './steps/step-four'
import { ImgUploader } from '../cmps/img-uploader'
import { stayService } from '../services/stay.service.js'

export const AddStay = () => {

    const [step, setStep] = useState(1)
    const [stayForm, setStayForm] = useState({ capcity: null, loc: null, amenities: [], imgUrls: [] })

    useEffect(() => {
        // setStayForm({...stayForm,capcity:"uuu"})
        // setStayForm({...stayForm,loc:"ggg"})
        setStep(1)
    }, [])
    const width = (step * 100) / 4
    const prograssWidth = width.toString() + "%"
    const remainWidth = (100 - width).toString() + "%"

    const createStay=(form)=>{
        console.log(stayForm,"step 3");
        stayService.createStay(form)
      


    }
    return (
        <section className="add-stay-container">
            <div className="header">
                <p >Step{step}</p>
                <div className="flex">
                    <div className="prograss-line" style={{ width: prograssWidth }}></div>
                    <div className="prograss-line" style={{ width: remainWidth, backgroundColor: "rgb(236,236,236)" }}></div>
                </div>
            </div>

            <div className={step === 4 ? " become-host grid-two-column" : "become-host"}>

                <div className="form-section">
                    {step === 1 && <StepOne setStep={setStep} setStayForm={setStayForm} stayForm={stayForm}/>}
                    {step === 2 && <StepTwo setStep={setStep} setStayForm={setStayForm} stayForm={stayForm}/>}
                    {step === 3 && <StepThree setStep={setStep} setStayForm={setStayForm} stayForm={stayForm}/>}
                    {step === 4 && <StepFour setStep={setStep} setStayForm={setStayForm} stayForm={stayForm} createStay={createStay}/>}
                </div>

                <div className="background">
                </div>


            </div>



        </section>
    )
} 