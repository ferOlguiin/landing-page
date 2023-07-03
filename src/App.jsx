import { Banner } from "./components/Banner"
import { FinalContent } from "./components/FinalContent"
import Footer from "./components/Footer"
import { InitialView } from "./components/InitialView"
import { MainContent } from "./components/MainContent"
import { Navbar } from "./components/Navbar"
import { SecondaryContent } from "./components/SecondaryContent"
import { TertiaryContent } from "./components/TertiaryContent"
import { WhatsAppFloat } from "./components/WhatsAppFloat"

function App() {

  return (
    <div className="min-vh-100 overflow-hidden">
      <div className="bg-main">
        <Navbar/>
        <InitialView/>
      </div>
      <div className="wavenavbar"></div>
      <MainContent/>
      <SecondaryContent/>
      <Banner/>
      <TertiaryContent/>
      <FinalContent/>
      <WhatsAppFloat/>
      <Footer/>
    </div>
  )
}

export default App
