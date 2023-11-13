import Bg from "../assets/scamBg.png";
import Nav from "../pages/Nav";
import Maskup from '../assets/maskgroup.svg';
import Stars from '../assets/stars.svg';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-full" >
        <img src={Bg} alt="" className=" border rounded-b-[60px] absolute w-full h-full object-cover mix-blend-overlay"/>
        <div className="px-20 py-8" >
            <Nav/>
            <div className="text-white ">
            <h1 className="text-[55px] font-font2 font-bold w-[700px]"><span className="uppercase">Stay ahead of scams from anywhere with</span> SCAMalicious</h1>
            <p className="text-xl font-font1 w-[823px]">Don’t let scammers take advantage of you! Stay one step ahead with SCAMalicious, the essential mobile application designed to help you make informed decisions and protect yourself from fraud.</p>
            <div className="flex gap-0 items-center ">
             <div className="flex items-center gap-0">
            <Link to="/download">  <button className="bg-yellow text-center text-black w-[250px] h-[56px] border-yellow rounded-lg text-[22px] font-semibold font-font1">Download App Now </button></Link>
              <img src={Maskup} alt="" className="mt-16 w-[268px] items-center ob" />
             </div>
             <div>
              <div className="mt-[85px] flex items-center text-[24px] gap-1"><span>5.0 App Review</span><img src={Stars} alt="" /></div>
              <p className="text-xl">(Over 1million downloads)</p>
             </div>
          </div>
        </div>
        </div>
      
    
    </div>
  )
}

export default Hero