import Scam from "../assets/scam2.svg";
import { Link } from "react-router-dom";


const AppDetails = () => {
  return (
    <div className="bg-[#FFF]   relative lg:px-20 px-8 py-14 w-full">
        <div className=" text-center "> 
           <h2 className="text-black font-font2 font-normal lg:text-3xl text-2xl">Powerful Scam Detector Application</h2>
           <p className="text-black opacity-80 font-font1 md:text-xl text-lg font-normal mx-auto lg:w-[930px] w-full mt-5">Our cutting-edge scam detection app empowers users to swiftly identify and report fraudulent activities, offering a robust shield against online scams. With real-time alerts and user-friendly features, its your trusted ally in the fight against deception.</p>
        </div>
        <div className="w-full flex flex-wrap gap-5 mt-10 text-center ">
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold md:text-lg text-sm text-center my-3"> Easy To Use Interface For All</header>
            <p className="text-black  font-font1 font-semibold">A friendly interface that provides a clear overview of recent scans, running or completed scans, subdomains found, and other critical security metrics, enabling users to monitor their web assets efficiently. </p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold md:text-lg text-sm text-center my-3">ScamQ&A</header>
            <p className="text-black  font-font1 font-semibold">A friendly interface that provides a clear overview of recent scans, running or completed scans, subdomains found, and other critical security metrics, enabling users to monitor their web assets efficiently. </p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold md:text-lg text-sm text-center my-3"> Prevention Tips</header>
            <p className="text-black  font-font1 font-semibold">A friendly interface that provides a clear overview of recent scans, running or completed scans, subdomains found, and other critical security metrics, enabling users to monitor their web assets efficiently. </p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold md:text-lg text-sm text-center my-3"> Warning Signs</header>
            <p className="text-black  font-font1 font-semibold">A friendly interface that provides a clear overview of recent scans, running or completed scans, subdomains found, and other critical security metrics, enabling users to monitor their web assets efficiently. </p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold md:text-lg text-sm text-center my-3"> Anti Scam Movement</header>
            <p className="text-black  font-font1 font-semibold">A friendly interface that provides a clear overview of recent scans, running or completed scans, subdomains found, and other critical security metrics, enabling users to monitor their web assets efficiently. </p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold md:text-lg text-sm text-center my-3">Report Scam</header>
            <p className="text-black  font-font1 font-semibold">A friendly interface that provides a clear overview of recent scans, running or completed scans, subdomains found, and other critical security metrics, enabling users to monitor their web assets efficiently. </p>
          </div> 
        </div>
        <div className="w-full lg:mx-[40%] mx-[20%]">
       <Link to='/download'>  <button className= "bg-yellow text-center shadow-md shadow-[#343131] text-black w-[224px] h-[56px] border-yellow rounded-lg text-[22px] font-semibold font-font1 items-center  mt-10">Download Now </button></Link>
        </div>
    </div>
  )
}

export default AppDetails