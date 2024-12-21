import Logo from "../assets/scamlogo.svg";
import Fb from "../assets/facebookblack.svg";
import Ig from "../assets/instagramblack.svg";
import Lin from "../assets/linkedinblack.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="lg:px-20 px-8 py-8 bg-[#F4F4D0] flex lg:flex-row flex-col justify-between items-center text-[#252528] font-font2 text-xl">
      <Link to="/">
        <img
          src={Logo}
          alt=""
          className="relative md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
        />
      </Link>

      <div>
        <h5 className="lg:my-0 my-5 lg:text-[16px] text-sm">
          The perfect mobile application for detecting scams
        </h5>
        <div className="flex gap-7 mt-4 items-center lg:mx-0 mx-auto justify-center">
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

        <div className="mt-8 items-center justify-center text-sm flex gap-5">
          <Link to="/terms">Terms and conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
      </div>

      <div className="lg:mt-8 mt-4 lg:text-[16px] text-sm">
        <small>©{currentYear} SCAMalicious</small>
      </div>
    </div>
  );
};

export default Footer;
