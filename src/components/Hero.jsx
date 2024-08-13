import Bg from "../assets/scamBg.png";
import Nav from "../pages/Nav";
import Maskup from '../assets/maskgroup.svg';
import Stars from '../assets/stars.svg';
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <div className="relative w-full h-full mb-10  " >
        <img src={Bg} alt="" className=" border rounded-b-[100px] bg-black absolute w-full h-full object-cover mix-blend-overlay"/>
        <div className="lg:px-20 px-8  py-8">
            <Nav/>
            <div className="text-white relative  lg:mt-8 mt-16">
            <h1 className="lg:text-[55px] text-[40px]  font-font2 font-bold lg:w-[700px] w-full "><span className="uppercase">Stay ahead of scams from anywhere with</span> SCAMalicious</h1>
            <p className="text-xl font-font1 lg:w-[823px] w-full tracking-widest mt-5">Don’t let scammers take advantage of you! Stay one step ahead with SCAMalicious, the essential mobile application designed to help you make informed decisions and protect yourself from fraud.</p>
            <div className="flex lg:flex-row flex-col  lg:gap-[190px] gap-6 items-center ">
             <div className="flex lg:flex-row flex-col items-center gap-0 relative">
            <Link to="/download" className=" lg:mt-0 mt-10"> <button className="bg-yellow relative text-white shadow-lg shadow-[#4c4848]  w-[220px] h-[54px]  rounded-lg text-[22px] font-semibold font-font1">Download Now </button></Link>
              <img src={Maskup} alt="" className=" w-[268px] items-center lg:absolute  relative lg:-top-2 top-0 lg:left-[200px] left-0 lg:origin-center lg:rotate-0  origin-center rotate-90" />
             </div>
             <div>
              <div className="  lg:mt-20 mt-0  flex   lg:flex-row flex-col items-center text-[24px] gap-1"><span>High Rated Review</span></div>
              <p className="text-xl lg:mb-0 mb-10 ">(SCAMalicious)</p>
             </div>
          </div>
        </div>
        </div>
      
    
    </div>
  )
}

export default Hero