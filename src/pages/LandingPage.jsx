import AppDetails from "../components/AppDetails"
import AppUses from "../components/AppUses"
import Hero from "../components/Hero"
import QuickStep from "../components/QuickStep"
import Footer from "./Footer"
import Contact from "../components/Contact"

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <AppDetails/>
        <AppUses/>
        <QuickStep/>
         <Contact/>
        <Footer/>
    </div>
  )
}

export default LandingPage