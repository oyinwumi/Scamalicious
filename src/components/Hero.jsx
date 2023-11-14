import Bg from "../assets/scamBg.png";
import Nav from "../pages/Nav";
import Maskup from '../assets/maskgroup.svg';
import Stars from '../assets/stars.svg';
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <div className="relative w-full h-full" >
        <img src={Bg} alt="" className=" border rounded-b-[60px] absolute w-full h-full object-cover mix-blend-overlay"/>
        <div className="lg:px-20 px-8  py-8" >
            <Nav/>
            <div className="text-white relative  mt-5">
            <h1 className="lg:text-[55px] text-[45px]  font-font2 font-bold lg:w-[700px] w-full "><span className="uppercase">Stay ahead of scams from anywhere with</span> SCAMalicious</h1>
            <p className="text-xl font-font1 lg:w-[823px] w-full ">Don’t let scammers take advantage of you! Stay one step ahead with SCAMalicious, the essential mobile application designed to help you make informed decisions and protect yourself from fraud.</p>
            <div className="flex lg:flex-row flex-col  gap-[190px] items-center ">
             <div className="flex lg:flex-row flex-col items-center gap-0 relative">
            <Link to="/download" className=" lg:mt-0 mt-10"> <button className="bg-[#800080] relative text-white  w-[220px] h-[54px] border-yellow rounded-lg text-[22px] font-semibold font-font1">Download App Now </button></Link>
              <img src={Maskup} alt="" className=" w-[268px] items-center absolute -top-2 left-[200px]" />
             </div>
             <div>
              <div className="  mt-20 flex  lg:flex-row flex-col items-center text-[24px] gap-1"><span>5.0 App Review</span><img src={Stars} alt="" /></div>
              <p className="text-xl">(Over 1million downloads)</p>
             </div>
          </div>
        </div>
        </div>
      
    
    </div>
  )
}

export default Hero