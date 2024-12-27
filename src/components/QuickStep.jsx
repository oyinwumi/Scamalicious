import Quick from "../assets/scamBg.jpeg"
import { Link } from "react-router-dom";


const QuickStep = () => {
  return (
    // <div className="relative w-full lg:h-[750px] min-h-full " >
    //    <img src={Quick} alt="" className="lg:object-fit object-contain  absolute w-full h-full  bg-cover mix-blend-overlay"/>
    //    <div className="text-white lg:ml-20 ml-0 lg:mt-10 mt-0 h-full">
    //     <h3 className="font-font2 font-bold lg:text-[50px] text-xl lg:pt-16 pt-10 lg:text-start text-center">Take A Quick Step</h3>
    //     <p className="font-font1 text-start  lg:w-[500px] w-full mt-10 font-bold md:px-0 px-8 lg:text-[20px] text-sm lg:leading-[40px] leading-8">In the age of digital risks, hesitation can be costly. Downloading the <strong>SCAMalicious</strong> app empowers you to make quick, informed decisions, safeguarding your finances and personal information. With its intuitive interface and <strong>ScamQ&A</strong> for instant risk assessment, <strong>SCAMalicious</strong> is your first line of defense against fraudulent schemes, providing peace of mind in a fast-paced online world.</p>
    //     <Link to="/download" className="relative"><button className= "items-center bg-yellow text-center shadow-lg shadow-black-500 text-black lg:w-[431px] w-[250px] h-[46px] border-yellow rounded-[50px] text-[22px] font-semibold font-font1   mt-14 lg:mb-0 mb-10">Download App Now </button></Link>
    //    </div>
    // </div>
    <div className="relative w-full lg:h-[750px] min-h-full">
  {/* Background Image */}
  <img
    src={Quick}
    alt=""
    className="absolute w-full h-full object-cover bg-cover mix-blend-overlay"
  />

  {/* Content */}
  <div className="text-white flex flex-col items-center lg:items-start lg:ml-20 px-4 lg:mt-10 mt-10 h-full">
    <h3 className="font-font2 font-bold lg:text-[50px] text-2xl lg:pt-16 pt-10 text-center lg:text-start">
      Take A Quick Step
    </h3>
    <p className="font-font1 text-center lg:text-start lg:w-[500px] w-full mt-6 font-bold lg:text-[20px] text-[16px] lg:leading-[40px] leading-8">
      In the age of digital risks, hesitation can be costly. Downloading the
      <strong> SCAMalicious </strong>
      app empowers you to make quick, informed decisions, safeguarding your
      finances and personal information. With its intuitive interface and
      <strong> ScamQ&A </strong> for instant risk assessment,
      <strong> SCAMalicious </strong> is your first line of defense against
      fraudulent schemes, providing peace of mind in a fast-paced online world.
    </p>

    {/* Centered Download Button */}
    <div className="flex justify-center lg:justify-start my-20">
      <Link to="/download" className="relative">
        <button className="bg-yellow shadow-lg text-black lg:w-[431px] w-[250px] h-[46px] border-yellow rounded-full text-[22px] font-semibold">
          Download App Now
        </button>
      </Link>
    </div>
  </div>
</div>

  )
}

export default QuickStep