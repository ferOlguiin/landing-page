import {HiOutlineChatBubbleLeftEllipsis, HiOutlineGlobeAsiaAustralia, HiOutlineMegaphone, HiOutlineUserGroup} from 'react-icons/hi2'


export const TertiaryContent = () => {
  return (
    <div className='py-5 bg-black'>
        <div className="container-fluid">
            <div className="d-flex flex-column justify-content-center align-items-center align-items-sm-start py-5 px-3 ps-sm-5">
                <h3 className="display-6 fw-bold text-white border-top border-1 pt-5 border-white text-center">SECCIÓN TERCIARIA DE EJ</h3>
                <p className="fs-5 text-white text-center text-sm-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 col-lg-2 m-1 text-white d-flex flex-column justify-content-center align-items-center p-3">
                    <span className='display-2 mb-4 p-5 border-main-alter rounded-circle d-flex justify-content-center align-items-center'><HiOutlineChatBubbleLeftEllipsis className='main-color'/></span>
                    <h3 className='mb-3'>Titulo</h3>
                    <p className='text-center text-break'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="col-md-4 col-lg-2 m-1 text-white d-flex flex-column justify-content-center align-items-center p-3">
                    <span className='display-2 mb-4 p-5 border-main-alter rounded-circle d-flex justify-content-center align-items-center'><HiOutlineGlobeAsiaAustralia className='main-color'/></span>
                    <h3 className='mb-3'>Titulo</h3>
                    <p className='text-center text-break'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="col-md-4 col-lg-2 m-1 text-white d-flex flex-column justify-content-center align-items-center p-3">
                    <span className='display-2 mb-4 p-5 border-main-alter rounded-circle d-flex justify-content-center align-items-center'><HiOutlineMegaphone className='main-color'/></span>
                    <h3 className='mb-3'>Titulo</h3>
                    <p className='text-center text-break'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="col-md-4 col-lg-2 m-1 text-white d-flex flex-column justify-content-center align-items-center p-3">
                    <span className='display-2 mb-4 p-5 border-main-alter rounded-circle d-flex justify-content-center align-items-center'><HiOutlineUserGroup className='main-color'/></span>
                    <h3 className='mb-3'>Titulo</h3>
                    <p className='text-center text-break'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

