import Logo from "../assets/scamlogo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="items-center flex justify-between w-full">
      <img src={Logo} alt=""  className="w-[80px] h-[80px]"/>
      <div className="flex gap-10 items-center">
        <header className="text-white text-[25px]">SCAMalicious</header>
       <Link to="/download"><button className="bg-yellow text-center text-black w-[248px] h-[56px] border-yellow rounded-lg text-[22px] font-semibold font-font1">Get The App Now</button>
</Link>
      </div>
    </div>
  )
}

export default Nav