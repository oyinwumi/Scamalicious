import Quick from "../assets/stepBg.png"
import { Link } from "react-router-dom";


const QuickStep = () => {
  return (
    <div className="relative w-full h-[430px] lg:mt-14 mt-0 " >
       <img src={Quick} alt="" className=" absolute w-full h-full  bg-cover mix-blend-overlay"/>
       <div className="text-white text-center ">
        <h3 className="font-font2 font-bold lg:text-[50px] text-2xl pt-14">Take A Quick Step</h3>
        <p className="font-font1 mx-auto lg:w-[856px] w-full mt-5 font-semibold md:px-0 px-8 lg:text-[16px] text-sm">In the age of digital risks, hesitation can cost you dearly. Downloading SCAMalicious application enables you to make quick, informed decisions, safeguarding your finances and personal information. With its intuitive interface and real-time alerts, its your first line of defense against fraudulent schemes, providing peace of mind in a fast-paced online world. </p>
        <Link to="/download" className="relative"><button className= " items-center bg-yellow text-center shadow-lg shadow-black-500 text-black lg:w-[431px] w-[250px] h-[46px] border-yellow rounded-[50px] text-[22px] font-semibold font-font1  mt-14 lg:mb-0 mb-10">Download App Now </button></Link>
       </div>
    </div>
  )
}

export default QuickStep