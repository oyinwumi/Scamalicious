import Footer from "./Footer"
import Nav from "./Nav"
import Bg from "../assets/scamBg.png";


const Disclaimer= () => {
  return (
   
    <div  className="">
           <div className="relative w-full h-full" >
    <img src={Bg} alt="" className=" absolute w-full h-full object-cover mix-blend-overlay"/>
    <div className="lg:px-20  px-8 py-8" >
        <Nav/>
    </div>

    </div>
      <div  className="lg:px-20 px-8 pt-10 text-[#252528] bg-[#FFF] tracking-wider">
            <h2 className="font-font2 font-bold lg:text-[50px] text-2xl  text-center">Disclaimer</h2>
      <div className="leading-[50px]">
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">1. Information Accuracy</h3>
        <p className=" font-bold font-font2 text-2xl">Information Disclaimer:</p>
        <p className=" text-2xl font-font1">The information provided on SCAMalicious, including but not limited to articles, tips,
assessments, and recommendations, is for informational purposes only. It does not
constitute professional advice or guarantee the accuracy, completeness, or suitability of the
information for specific purposes.</p>
<p className=" font-bold font-font2 text-2xl mt-5">User Discretion:</p>
        <p className=" text-2xl font-font1 mb-1">
        Users are encouraged to exercise their judgment and discretion before acting upon any
information provided on SCAMalicious.</p>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">2. ScamQ&A Feature</h3>
        <p className=" font-bold font-font2 text-2xl">Automated Assessment:</p>
        <p className=" text-2xl font-font1">The ScamQ&A feature provides an automated assessment based on user input and the
{`system's`} algorithms. This assessment does not replace professional advice and should not be
solely relied upon for making decisions.</p>
<p className=" font-bold font-font2 text-2xl">Decision Making:</p>
        <p className=" text-2xl font-font1 my-5">
Users are responsible for their decisions and actions even after receiving an assessment
from the ScamQ&A feature</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">3. User Contributions</h3>
        <p className=" text-2xl font-font1 mb-1"><span  className=" font-bold font-font2">a. </span>Content shared by users within public areas of SCAMalicious, including forums or
discussions, represents the opinions and experiences of individual users. SCAMalicious does
not endorse or validate the accuracy of user-contributed content</p>
           <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">b.</span> SCAMalicious reserves the right to moderate user-contributed content to maintain
compliance with guidelines but does not guarantee the accuracy or authenticity of such
content.</p>
      </div>
      <div>
      <h3 className="text-3xl font-font2 font-bold  my-8">4. Third-Party Links and Services</h3>
        <p className=" text-2xl font-font1 mb-1">SCAMalicious may contain links to third-party websites or services. The inclusion of these
links does not imply endorsement or responsibility for the content, privacy policies, or
practices of these third-party sites or services.</p>
        
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">5. Limitation of Liability</h3>
        <p className=" text-2xl font-font1 mb-1"><span  className=" font-bold font-font2">a. </span>SCAMalicious and its affiliates shall not be held liable for any direct, indirect, incidental,
consequential, or punitive damages arising from the use or inability to use the App/Website
or any content therein.</p>
           <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">b.</span> Users acknowledge and accept full responsibility for their use of SCAMalicious and its
content.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">6. Legal Compliance</h3>
           <p className=" text-2xl font-font1 mb-1">SCAMalicious operates in accordance with applicable laws and regulations globally but does
not warrant compliance with specific laws of individual jurisdictions.</p>

      </div>

      <div className="pb-10">
        <h3 className="text-3xl font-font2 font-bold  mt-8">7. Disclaimer: Accuracy of Contact Information</h3>
        <p className=" text-2xl font-font1 mt-6">The {`"Reporting Scams and Fraud per country" `}section of SCAMalicious provides contact
information for government fraud departments or police agencies in various countries.
While every effort has been made to ensure the accuracy and reliability of the provided
information at the time of publication, please note:</p>
<p className=" text-2xl font-font1 my-6"><span className=" font-bold font-font2">Accuracy Disclaimer:</span> The contact information presented is based on the best available
knowledge and resources accessible at the time of inclusion in the app. However, due to the
dynamic nature of government agencies and their contact details, there might be changes or
updates that occur after publication.</p>
<p className=" text-2xl font-font1 my-6"><span className=" font-bold font-font2">Recommended Verification:</span> Users are advised to verify the provided contact information
independently, as changes or updates might have occurred since publication. SCAMalicious
cannot guarantee real-time updates or immediate changes to the contact details of
government agencies in various countries.</p>
<p className=" text-2xl font-font1  my-6"><span className=" font-bold font-font2">User Responsibility:</span> Users are encouraged to exercise due diligence and discretion when
using the provided contact information and to report any inaccuracies or changes they
encounter in the provided details.</p>
      </div>

 
      </div>
</div>
<Footer/>
    </div>
  )
}

export default Disclaimer ;