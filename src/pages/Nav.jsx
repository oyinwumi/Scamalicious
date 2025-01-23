import Logo from "../assets/scamlogo.svg";
import Fb from "../assets/facebook.svg";
import Ig from "../assets/instagram.svg";
import Lin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="items-center flex justify-between w-full">
      <Link to="/">
        <img
          src={Logo}
          alt="SCAMalicious Logo"
          className="relative md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
        />
      </Link>
      <div className="flex gap-2 items-center font-font2 font-bold ">
        <header className="text-white lg:text-[22px] text-[16px]">
          SCAMalicious
        </header>
        <div className=" relative flex gap-5 items-center lg:mx-0 mx-auto justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61564431381719"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Fb} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/scamalicious_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Ig} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/scamalicious/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Lin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
