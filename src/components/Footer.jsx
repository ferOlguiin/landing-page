import {HiOutlineMapPin, HiOutlineEnvelope, HiOutlinePhone} from 'react-icons/hi2'
import {IoLogoInstagram, IoLogoFacebook, IoLogoTwitter} from 'react-icons/io5'

export const Footer = () => {
  return (
    <footer className="bg-main">
        <div className="wavebg-footer"></div>
        <div className="d-flex justify-content-center align-items-center flex-column flex-md-row p-3 text-white">
            <h2 className="mx-2 p-5 fw-bold fs-2">Example</h2>
            <div className="d-flex flex-column justify-content-center align-items-center mx-2 p-5">
              <span className='fs-2 fw-bold'>Contacto</span>
              <span><HiOutlinePhone className='me-2'/>54266X888888</span>
              <span><HiOutlineEnvelope className='me-2'/>ejemplo@gmail.com</span>
              <span><HiOutlineMapPin className='me-2'/>Localidad ruta 4 Sl Arg</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mx-2 p-5">
              <span className='fs-2 fw-bold'>Índice</span>
              <span>⮞ ejemplo</span>
              <span>⮞ ejemplo2</span>
              <span>⮞ ejemplo3</span>
              <span>⮞ ejemplo4</span>
            </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center py-2 text-white">
          <h5 className='m-0 border-top border-1 border-dark px-1 px-md-3 text-center'>Copyright 2023 design by ferolguin.tech</h5>
          <div className="d-flex justify-content-around align-items-center border-top border-1 border-dark px-3 my-3 py-md-0">
            <span className='fs-5 mx-1'><IoLogoInstagram/></span>
            <span className='fs-5 mx-1'><IoLogoFacebook/></span>
            <span className='fs-5 mx-1'><IoLogoTwitter/></span>
          </div>
        </div>
    </footer>
  )
}

export default Footer