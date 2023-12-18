import Scam from "../assets/scam2.svg";
import { Link } from "react-router-dom";


const AppDetails = () => {
  return (
    <div className="bg-[#FFF]   relative lg:px-20 px-8 lg:py-14 py-0 w-full">
        <div className=" text-center "> 
           <h2 className="text-black font-font2 font-normal lg:text-3xl text-2xl">Powerful Scam Detector Application</h2>
           <p className="text-black opacity-80 font-font1 md:text-xl text-lg font-normal mx-auto lg:w-[930px] w-full mt-5">Our cutting-edge scam detection app empowers users to swiftly identify and report fraudulent activities, offering a robust shield against online scams. With real-time alerts and user-friendly features, its your trusted ally in the fight against deception.</p>
        </div>
        <div className="w-full flex flex-wrap gap-5 mt-10 text-center ">
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold lg:text-2xl text-xl text-center my-3"> Easy To Use</header>
            <p className="text-black  font-font1 font-semibold">This user-friendly application empowers you to identify and avoid fraudulent activities effortlessly. From clueless newbie to tech-savvy expert, {`it's`} got your back where you can easily navigate through its features and functionalities to protect yourself from potential scams.
            This digital shield safeguards against scams and fraud. It stands as a comprehensive resource, delivering knowledge, guidance, and essential tools to fend off potential cyber threats effectively.
           </p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold lg:text-2xl text-xl text-center my-3">ScamQ&A</header>
            <p className="text-black  font-font1 font-semibold">Stay one step ahead with ScamQ&A, a simple questionnaire that determines how likely it is that you are exposed to a scam. The result will allow you to make smart decisions before proceeding further.  

No crystal ball needed; just four simple questions, and voilà – your scam susceptibility unveiled! ScamQ&A not only acts as your scam shield but also throws in some practical advice, ensuring you navigate through tricky situations with the skill of a digital detective. Because in the world of scams, we believe in outsmarting, not outpanicking.
{`Don't`} let scammers take advantage of you!

 </p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold lg:text-2xl text-xl text-center my-3"> Prevention Tips</header>
            <p className="text-black  font-font1 font-semibold">As technology plays an increasingly significant role in daily life, preventing scams fosters confidence in digital interactions. Individuals who feel secure online are more likely to embrace and benefit the advantages of technology without fear of exploitation. 

Remember, prevention is key when it comes to avoiding scams and frauds. By being aware of the warning signs, staying informed, and taking steps to protect yourself and your personal information, you will reduce your risk of falling victim to scams.  
  </p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold lg:text-2xl text-xl text-center my-3"> Warning Signs</header>
            <p className="text-black  font-font1 font-semibold">Understanding warning signs{` isn't`} just about vigilance;{` it's`} your first line of defence against scams. By recognizing these signs, you become the guardian of your financial well-being, ensuring that every transaction is a step towards security, not vulnerability. Stay one step ahead – know the signs, protect your peace of mind, and embrace a scam-free future with confidence. </p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold lg:text-2xl text-xl text-center my-3"> Anti Scam Movement</header>
            <p className="text-black  font-font1 font-semibold">Our mission is to create a vibrant community where we sharpen our online awareness through collective stories and lessons learned. 
By joining this movement, you will contribute to a collective effort to raise awareness, educate, and empower people to recognize and combat scams effectively. Together, we form a resilient community dedicated to dismantling fraudulent schemes and fostering a safer, more secure digital landscape for everyone.

By lending your voice, you’ll share stories in the APP that ignite a beacon of caution and hope. Together, we’re redefining digital safety, one story at a time. Let’s start an Anti-Scam movement together.

</p>
          </div>
          <div className=" border bg-white  rounded-[40px] p-5 lg:w-[32%] w-full shadow-md shadow-[#4c4848]">
            <img src={Scam} alt="" className="items-center mx-auto " />
            <header className="text-black font-font2 font-semibold lg:text-2xl text-xl text-center my-3">Report Scam in your country</header>
            <p className="text-black  font-font1 font-semibold">Reporting a scam in your country is more than an individual action – {`it's `}a powerful contribution to national cybersecurity. By reporting scams, you play a crucial role in building a robust defence against fraudulent activities, helping authorities stay ahead of evolving threats. Your report is not just a call for justice, but a cornerstone in fortifying the online safety of our entire community.

</p>
          </div> 
        </div>
        <div className="flex justify-center w-full ">
       <Link to='/download'>  <button className= "bg-yellow text-center shadow-md shadow-[#343131] text-black w-[224px] h-[56px] border-yellow rounded-lg text-[22px] font-semibold font-font1 items-center  mt-10">Download Now </button></Link>
        </div>
    </div>
  )
}

export default AppDetails