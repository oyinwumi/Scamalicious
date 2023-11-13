import Logo from "../assets/scamlogo.svg";
import Fb from "../assets/facebook.svg";
import Tw from "../assets/twitter.svg";
import Ig from "../assets/instagram.svg";
import Lin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className="px-20 py-8 bg-[#F4F4D0] flex justify-between items-center text-[
        #252528] font-font2 text-xl">
      <img src={Logo} alt="" className="w-[80px] h-[80px]" />   
      <div>
        <h5>The perfect mobile application for detecting scam</h5>
        <div className="flex gap-7 mt-4">
            <a href=""><img src={Fb} alt="" /></a>
            <a href=""><img src={Tw} alt="" /></a>
            <a href=""><img src={Ig} alt="" /></a>
            <a href=""><img src={Lin} alt="" /></a>
        </div>
      </div>
      <div>
        <Link to="/download">Click here to download</Link>
      </div>
    </div>
  )
}

export default Footer