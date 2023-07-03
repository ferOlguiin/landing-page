import whatsapp from '../images/wspfloat.png'

export const WhatsAppFloat = () => {

    const handleFloat = () => {
        window.open("https://api.whatsapp.com/send?phone=542664312538", "_blank")
    }

  return (
    <div className="float-icons-width d-flex justify-content-end align-items-center">
        <img type="button" onClick={handleFloat} src={whatsapp} alt="whatsapp" className='mb-4 me-2 floaticon-size'/>
    </div>
  )
}