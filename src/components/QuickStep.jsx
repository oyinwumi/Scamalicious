import Quick from "../assets/stepBg.png"
import { Link } from "react-router-dom";


const QuickStep = () => {
  return (
    <div className="relative w-full h-[430px] mt-14 " >
       <img src={Quick} alt="" className=" absolute w-full h-full  bg-cover mix-blend-overlay"/>
       <div className="text-white text-center ">
        <h3 className="font-font2 font-bold text-[50px] pt-14">Take A Quick Step</h3>
        <p className="font-font1 mx-auto w-[856px] mt-5 font-semibold">In the age of digital risks, hesitation can cost you dearly. Downloading SCAMalicious application enables you to make quick, informed decisions, safeguarding your finances and personal information. With its intuitive interface and real-time alerts, its your first line of defense against fraudulent schemes, providing peace of mind in a fast-paced online world. </p>
        <Link to="/download"><button className= "bg-yellow text-center shadow-lg shadow-black-500 text-black w-[431px] h-[46px] border-yellow rounded-[50px] text-[22px] font-semibold font-font1 items-center  mt-14">Download App Now </button></Link>
       </div>
    </div>
  )
}

export default QuickStep