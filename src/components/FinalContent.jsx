import img1 from '../images/initialview2.svg'
import { FormFinalContent } from './FormFinalContent'

export const FinalContent = () => {

  return (
    <div className='bg-black'>
        <div className='d-flex justify-content-center align-items-center'>
            <span className='border-top border-1 border-white bg-info w-50'></span>
        </div>
        <div className="container-fluid py-5">
            <div className="row d-flex justify-content-center aling-items-center">
                <div className="col-lg-5 d-flex justify-content-center align-items-center">
                    <img src={img1} alt="imagen2" className='img-fluid' style={{width:450, height:450}}/>    
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center align-items-lg-start px-4 px-lg-0">
                    <h2 className='mb-4 text-white'>T I T U L O</h2>
                    <p className='text-break text-center text-lg-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloremque dignissimos et enim odit quas. Sunt totam sit iste tempora ut blanditiis ea officiis mollitia a? Esse minus pariatur tempore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eius quis obcaecati optio atque similique quo accusamus? Illum ullam perspiciatis, aliquam excepturi consequuntur commodi voluptatibus ut pariatur non corporis adipisci!</p>
                </div>
            </div>
        </div>
        <FormFinalContent/>
    </div>
  )
}

