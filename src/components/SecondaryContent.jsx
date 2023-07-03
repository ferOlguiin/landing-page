import {HiOutlineGlobeEuropeAfrica, HiOutlineRocketLaunch, HiOutlineTruck} from 'react-icons/hi2'
import { AlterInfoSecondaryContent } from './AlterInfoSecondaryContent'

export const SecondaryContent = () => {
  return (
    <div className="pb-5 text-white bg-secondarycontent">
        <div className="wavebg-secondarycontent"></div>
        <div className="d-flex flex-column justify-content-center align-items-center align-items-sm-end py-5 px-3 pe-sm-5">
            <h3 className="display-6 fw-bold border-top border-2 border-white pt-5 text-center">SECCIÓN SECUNDARIA DE EJ</h3>
            <p className="fs-5 text-center text-sm-end text-break">Lorem ipsum dolor sit amet consectetur adipisicing elit, consectur.</p>
        </div>
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mx-3 mx-lg-0 align-items-center">
                <div className="col-lg-3 rounded p-4 m-3 shadow-lg card-secondary-content d-flex flex-column justify-content-center align-items-center">
                    <span className='display-5 mb-3'><HiOutlineGlobeEuropeAfrica/></span>
                    <h4 className='fs-2 mb-4'>Titulo ejemplo</h4>
                    <p className="text-break fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa quisquam cumque culpa ab ipsum nam, iure nihil accusamus labore accusantium veniam saepe illum recusandae nisi quod, perferendis corrupti soluta. Lorem jaidw aoiwdhwao dawiohd awiod hawio iohowahdioiaow iawodh awoidh waiodha woidh</p>
                    <button className='btn-main-alter-yellow fs-5 px-5 mt-3 rounded'>Comprar</button>
                </div>
                <div className="col-lg-3 rounded p-4 m-3 shadow-lg card-secondary-content d-flex flex-column justify-content-center align-items-center">
                    <span className='display-5 mb-3'><HiOutlineRocketLaunch/></span>
                    <h4 className='fs-2 mb-4'>Titulo ejemplo</h4>
                    <p className="text-break fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa quisquam cumque culpa ab ipsum nam, iure nihil accusamus labore accusantium veniam saepe illum recusandae nisi quod, perferendis corrupti soluta. Lorem jaidw aoiwdhwao dawiohd awiod hawio iohowahdioiaow iawodh awoidh waiodha woidh</p>
                    <button className='btn-main-alter-yellow fs-5 px-5 mt-3 rounded'>Comprar</button>
                </div>
                <div className="col-lg-3 rounded p-4 m-3 shadow-lg card-secondary-content d-flex flex-column justify-content-center align-items-center">
                    <span className='display-5 mb-3'><HiOutlineTruck/></span>
                    <h4 className='fs-2 mb-4'>Titulo ejemplo</h4>
                    <p className="text-break fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa quisquam cumque culpa ab ipsum nam, iure nihil accusamus labore accusantium veniam saepe illum recusandae nisi quod, perferendis corrupti soluta. Lorem jaidw aoiwdhwao dawiohd awiod hawio iohowahdioiaow iawodh awoidh waiodha woidh</p>
                    <button className='btn-main-alter-yellow fs-5 px-5 mt-3 rounded'>Comprar</button>
                </div>
            </div>
        </div>
        <AlterInfoSecondaryContent/>
    </div>
  )
}

