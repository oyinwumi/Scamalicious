import Nav from "./Nav"
import Bg from "../assets/stepBg.jpeg";
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
                        <h2 className="text-[50px] font-font2 font-bold mt-10">Download SCAMalicious</h2>
                        <p className="font-font1 text-xl font-normal mt-3">Choose from the option below to download SCAMalicious mobile application.</p>
                        <div className="my-16 gap-10 flex flex-col justify-center">
                            <div className="relative">
                                <a href="https://play.google.com/store/apps/details?id=com.TitanZenLimited.scammobileapp" target="_blank" className="flex items-center justify-center">
                                    <button className="bg-yellow text-black shadow-lg shadow-[#4c4848] w-[290px] h-[60px] rounded-lg text-[20px] font-semibold font-font1 px-5 flex items-center">
                                        <img src={Android} alt="Android icon" className="w-[30px] h-[30px] mr-3" />
                                        Download For Android
                                    </button>
                                </a>
                            </div>
                            <div className="relative">
                                <a href="https://apps.apple.com/gb/app/scamalicious/id6478443701" target="_blank" className="flex items-center justify-center">
                                    <button className="bg-yellow text-black shadow-lg shadow-[#4c4848] w-[290px] h-[60px] rounded-lg text-[20px] font-semibold font-font1 px-5 flex items-center">
                                        <img src={Iphone} alt="Iphone icon" className="w-[30px] h-[30px] mr-3" />
                                        Download For Iphone
                                    </button>
                                </a>
                            </div>
                        </div>
            </div>

           <Footer/>  
</div>
 
  )
}

export default Download