import Appuse from "../assets/appuse.png";
import { Link } from "react-router-dom";


const AppUses = () => {
  return (
    <div className="lg:px-20 px-8  lg:py-10 py-8 text-[#252528] bg-[#FFF]">
        <h3 className="lg:text-center font-font2 lg:text-3xl text-2xl font-normal w-full ">What Our Mobile Application Is For?</h3>
        <div className="flex lg:flex-row flex-col  w-full lg:mt-10 mt-6">
           <div className="lg:w-[60%] w-full lg:order-1 order-2 flex flex-col lg:items-start items-center">
           <p className="  lg:text-xl text-[16px] font-font1 font-normal w-full">
              Protecting yourself from online scams has never been more crucial, and SCAMalicious is here to make it easier than ever. By downloading our app, you gain access to powerful tools like ScamQ&A, which provides instant risk assessments tailored to your situation. Imagine having the ability to spot and avoid scams before they impact you—our personalized "scam risk" score does just that. With SCAMalicious, you’re not just reacting to threats; you’re proactively safeguarding your digital life. 
              Don’t leave your online safety to chance—download SCAMalicious today and equip yourself with the knowledge and tools to outsmart scammers at every turn.
          </p>
           <Link to="/download">  <button className= "bg-yellow text-center text-[#202020] w-[224px] h-[56px] border-yellow rounded-lg text-[22px] font-semibold font-font1   mt-10">Download Now </button></Link>
           </div>
            <img src={Appuse} alt="" className="lg:w-[40%] w-full h-[430px] lg:mb-0 mb-6 lg:ml-14 ml-0 object-cover lg:order-2 order-1" />
        </div>
    </div>
  )
}

export default AppUses