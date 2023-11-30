import Appuse from "../assets/appuse.png";
import { Link } from "react-router-dom";


const AppUses = () => {
  return (
    <div className="lg:px-20 px-8 pt-8 py-20 text-[#252528] bg-[#FFF]">
        <h3 className="lg:text-center font-font2 lg:text-3xl text-2xl font-normal w-full ">What Our Mobile Application Is For?</h3>
        <div className="flex lg:flex-row flex-col  w-full mt-10">
           <div className="lg:w-[60%] w-full ">
           <p className="  lg:text-xl text-[16px] font-font1 font-normal w-full">Our SCAMalicious application is a comprehensive tool designed to fortify your safety. It empowers you by providing instant risk assessment through our ScamQ&A, allowing you to make informed decisions and steer clear of potential scams. 

By answering just a few questions, you will unlock a personalized {`"scam risk"`} score that provides you with a complete understanding of your vulnerability. 

With our app, {`you're`} not just a user; {`you're`} a savvy guardian of your digital realm, armed with valuable tips and recommendations to outsmart potential scams. Join the Anti-Scam movement – because in the world of scams, staying informed is your superpower.
 </p>
           <Link to="/download">  <button className= "bg-yellow text-center shadow-md shadow-[#343131] text-[#202020] w-[224px] h-[56px] border-yellow rounded-lg text-[22px] font-semibold font-font1 items-center  mt-10">Download Now </button></Link>
           </div>
            <img src={Appuse} alt="" className="lg:w-[40%] w-full h-[430px]  lg:ml-14 ml-0 object-contain" />
        </div>
    </div>
  )
}

export default AppUses