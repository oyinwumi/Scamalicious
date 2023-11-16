import Nav from "./Nav"
import Bg from "../assets/scamBg.png";
import Footer from "./Footer";
import Android from "../assets/androids.svg";
import Iphone from "../assets/iphones.svg";


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
        <div className="my-16  gap-10 flex flex-col justify-center">
        <div className="relative">
        <a  href="*" className=" "> <button className="bg-yellow relative text-black shadow-lg shadow-[#4c4848]  w-[355px] h-[60px]  rounded-lg text-[20px] font-semibold font-font1 px-5">Download For Android </button></a>
          <img src={Android} alt="" className="absolute lg:top-4 top-4 lg:left-[42%] left-16" />
        </div>
        <div className="relative">
        <a  href="*" className=" "> <button className="bg-yellow relative text-black shadow-lg shadow-[#4c4848]  w-[355px] h-[60px]  rounded-lg text-[20px] font-semibold font-font1 px-5">Download For Iphone </button></a>
          <img src={Iphone} alt="" className="absolute absolute lg:top-4 top-4 lg:left-[42%] left-16" />
        </div>

       </div>
    </div>
    <Footer/>  
</div>
 
  )
}

export default Download