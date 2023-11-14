import Nav from "./Nav"
import Bg from "../assets/scamBg.png";
import Footer from "./Footer";
import Android from "../assets/android.svg";
import Iphone from "../assets/iphone.svg";


const Download = () => {
  return (
    <div className="">
     <div className="relative w-full h-full" >
    <img src={Bg} alt="" className=" absolute w-full h-full object-cover mix-blend-overlay"/>
    <div className="lg:px-20  px-8 py-8" >
        <Nav/>
    </div>

    </div>
    <div className="text-center text-black lg:mb-[17%] mb-[20%] ">
        <h2 className="text-[50px] font-font2 font-bold mt-10">Download scamalicious</h2>
        <p className="font-font1 text-xl font-normal mt-3">Choose from the option below to download SCAMalicious mobile application.</p>
       <div className="mt-8 mx-[40%]">
       <a href="" > <img src={Android} alt="" /></a>
        <a href=""> <img src={Iphone} alt="" /></a>
       </div>
    </div>
    <Footer/>  
</div>
 
  )
}

export default Download