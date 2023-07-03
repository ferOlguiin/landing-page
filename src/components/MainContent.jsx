import {SlBubbles, SlChart, SlUserFollowing, SlPlane} from 'react-icons/sl'

export const MainContent = () => {
  return (
    <div className="pt-5 pb-1">
        <div className="d-flex justify-content-center align-items-center flex-column px-3 mb-3">
            <h2 className='text-center'>T I T U L O I N I C I A L</h2>
            <p className='text-center text-break'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi explicabo, in ad corporis reiciendis nisi velit</p>
        </div>

        <div className="px-1 px-sm-2 px-lg-4 px-xl-5 d-flex mb-0 mb-xl-3 justify-content-around flex-wrap flex-xl-nowrap align-items-center">

            <div className="d-flex my-3 my-sm-0 mx-3 mx-sm-5 flex-wrap flex-sm-nowrap justify-content-center align-items-center shadow-card-main-content p-3">
                <div className="pe-0 pe-sm-4 d-flex flex-column align-items-center align-items-sm-end justify-content-center">
                    <h3>Titulo</h3>
                    <p className="text-break text-center text-sm-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis suscipit incidunt dolore non quos earum ipsam sint? Doloremque officiis laudantium fugit voluptate consequuntur illum nemo aut ab sed quidem!</p>
                    <button className='btn-main px-3 py-1 rounded-pill'>Ver más</button>
                </div>
                <span className='display-5 bg-main-alter rounded-circle my-3 my-sm-0 p-5 d-flex justify-content-center'><SlChart className='text-black'/></span>
            </div>
            <div className="d-flex my-3 my-sm-0 mx-3 mx-sm-5 flex-wrap flex-sm-nowrap justify-content-center align-items-center shadow-card-main-content p-3">
                <span className='display-5 bg-main-alter rounded-circle my-3 my-sm-0 p-5 d-flex justify-content-center'><SlBubbles className='text-black'/></span>
                <div className="ps-0 ps-sm-4 d-flex flex-column align-items-center align-items-sm-start justify-content-center">
                    <h3>Titulo</h3>
                    <p className="text-break text-center text-sm-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis suscipit incidunt dolore non quos earum ipsam sint? Doloremque officiis laudantium fugit voluptate consequuntur illum nemo aut ab sed quidem!</p>
                    <button className='btn-main px-3 py-1 rounded-pill'>Ver más</button>
                </div>
            </div>

        </div>
        <div className="px-1 px-sm-2 px-lg-4 px-xl-5 d-flex justify-content-around flex-wrap flex-xl-nowrap align-items-center">

            <div className="d-flex my-3 my-sm-0 mx-3 mx-sm-5 flex-wrap flex-sm-nowrap justify-content-center align-items-center shadow-card-main-content p-3">
                <div className="pe-0 pe-sm-4 d-flex flex-column align-items-center align-items-sm-end justify-content-center">
                    <h3>Titulo</h3>
                    <p className="text-break text-center text-sm-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis suscipit incidunt dolore non quos earum ipsam sint? Doloremque officiis laudantium fugit voluptate consequuntur illum nemo aut ab sed quidem!</p>
                    <button className='btn-main px-3 py-1 rounded-pill'>Ver más</button>
                </div>
                <span className='display-5 bg-main-alter rounded-circle my-3 my-sm-0 p-5 d-flex justify-content-center'><SlUserFollowing className='text-black'/></span>
            </div>
            <div className="d-flex my-3 my-sm-0 mx-3 mx-sm-5 flex-wrap flex-sm-nowrap justify-content-center align-items-center shadow-card-main-content p-3">
                <span className='display-5 bg-main-alter rounded-circle my-3 my-sm-0 p-5 d-flex justify-content-center'><SlPlane className='text-black'/></span>
                <div className="ps-0 ps-sm-4 d-flex flex-column align-items-center align-items-sm-start justify-content-center">
                    <h3>Titulo</h3>
                    <p className="text-break text-center text-sm-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis suscipit incidunt dolore non quos earum ipsam sint? Doloremque officiis laudantium fugit voluptate consequuntur illum nemo aut ab sed quidem!</p>
                    <button className='btn-main px-3 py-1 rounded-pill'>Ver más</button>
                </div>
            </div>

        </div>

    </div>
  )
}

