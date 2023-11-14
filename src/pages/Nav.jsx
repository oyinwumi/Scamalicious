import Logo from "../assets/scamlogo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="items-center flex justify-between w-full">
     <Link to="/"><img src={Logo} alt=""  className=" relative md:w-[80px] md:h-[80px] w-[60px] h-[60px]"/></Link>
      <div className="flex gap-10 items-center">
        <header className="text-white lg:text-[25px] text-[16px]">SCAMalicious</header>
       <Link to="/download" className=""><button className= " relative text-sm bg-yellow text-center text-black md:w-[248px] w-[120px] md:h-[56px] h-[46px] border-yellow rounded-lg md:text-[22px] font-semibold font-font1">Get The App Now</button>
      </Link>
      </div>
    </div>
  )
}

export default Nav