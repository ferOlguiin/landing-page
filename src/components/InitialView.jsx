import img1 from '../images/initialview3.svg'

export const InitialView = () => {
  return (
    <div className="px-5 pt-4 pb-2">
        <div className="d-flex justify-content-center align-items-end flex-wrap flex-lg-nowrap text-black">
            <div className="d-flex flex-column align-items-center align-items-lg-start me-lg-4 my-5 mt-lg-0">
                <h1 className='display-3 fw-bold'>TITULO</h1>
                <h3 className='mb-3'>Subtitulo</h3>
                <p className='text-break text-center m-0 p-0 fs-5'>Lorem ipsum dolor si woidt amet awdlawjda</p>
                <p className='text-break text-center m-0 p-0 fs-5'>lorem ipsum dolor si woidt amet awdlawjdawp</p>
                <button className='btn-main-alter-yellow fs-5 px-4 py-2 mt-3 rounded-pill'>Info Ejemplo ➔</button>
            </div>
            <div className="d-flex justify-content-center align-items-center ms-md-3">
                <img src={img1} alt="imagenuno" className='img-fluid' style={{width:400, height:400}}/>
            </div>
        </div>
    </div>
  )
}

