import img from '../images/alterinfo.svg'


export const AlterInfoSecondaryContent = () => {
  return (
    <div className="pt-4">
        <div className="container-fluid alterinfobg py-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-9 col-md-8 col-lg-4 me-lg-5 d-flex flex-column justify-content-center align-items-center">
                    <h3 className='fs-1 mb-4 text-center'>Titulo de ejemplo</h3>
                    <div className="accordion w-100" id="accordionExample">
                      <div className="accordion-item bg-transparent my-3">
                        <h2 className="accordion-header">
                          <button className="accordion-button fw-bold fs-6 accordion-secondary-content bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                           Ejemplo #1
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolorum magni earum, voluptatem.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-transparent my-3">
                        <h2 className="accordion-header">
                          <button className="accordion-button fw-bold fs-6 accordion-secondary-content bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           Ejemplo #2
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolorum magni earum, voluptatem.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-transparent my-3">
                        <h2 className="accordion-header">
                          <button className="accordion-button fw-bold fs-6 accordion-secondary-content bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           Ejemplo #3
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolorum magni earum, voluptatem.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-transparent my-3">
                        <h2 className="accordion-header">
                          <button className="accordion-button fw-bold fs-6 accordion-secondary-content bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                           Ejemplo #4
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolorum magni earum, voluptatem.
                          </div>
                        </div>
                      </div>
                    </div>                    
                </div>
                <div className="col-lg-5 d-flex justify-content-center align-items-center">
                    <img src={img} alt="alterinfo" style={{width:500, height:500}}/>
                </div>
            </div>
            <div className='row'>
                 <div className='col-12 d-flex justify-content-center aling-items-center'>
                    <button className='btn-main-alter-black px-4 fs-4 rounded-pill'>Más sobre esto</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

