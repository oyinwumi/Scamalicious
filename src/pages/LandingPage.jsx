import AppDetails from "../components/AppDetails"
import AppUses from "../components/AppUses"
import Hero from "../components/Hero"
import QuickStep from "../components/QuickStep"
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <AppDetails/>
        <AppUses/>
        <QuickStep/>
        <Footer/>
    </div>
  )
}

export default LandingPage