import Footer from "./Footer"
import Nav from "./Nav"
import Bg from "../assets/stepBg.jpeg";


const Privacy = () => {
  return (
   
    <div >
           <div className="relative w-full h-full" >
    <img src={Bg} alt="" className=" absolute w-full h-full object-cover mix-blend-overlay"/>
    <div className="lg:px-20  px-8 py-8" >
        <Nav/>
    </div>

    </div>
      <div  className="lg:px-20 px-8 pt-10 text-[#252528] bg-[#FFF] tracking-wider">
            <h2 className="font-font2 font-bold lg:text-[50px] text-2xl  text-center">Privacy Policy</h2>
      <div className="leading-[50px]">
  

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">1. Information Collection</h3>
        <p className=" text-2xl font-font1 mb-1"><span  className=" font-bold font-font2">a. </span><span  className=" font-bold font-font2">Types of Information:</span> SCAMalicious collects personal information (name, email, etc.)
provided by users during registration or account setup. Additionally, non-personal
information, such as device information and usage data, may be collected automatically.</p>
           <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">b.</span> <span className=" font-bold font-font2">Purpose of Collection: </span>Uhe collected information is used to provide and improve services,
personalize user experience, and communicate with users.</p>
           <p className=" text-2xl font-font1"><span className=" font-bold font-font2">c.</span> <span className=" font-bold font-font2">Cookies and Tracking:</span> SCAMalicious may use cookies and similar technologies to enhance
user experience and collect data for analytics purposes. Users can manage cookie
preferences through browser settings.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">2. Data Usage and Sharing</h3>
        <p className=" text-2xl font-font1 mb-1"><span  className=" font-bold font-font2">a. </span><span  className=" font-bold font-font2">Use of Information:</span> User data is used to operate and maintain SCAMalicious, personalize
content, and communicate with users. Aggregated or anonymized data may be used for
analytics and service improvements.</p>
           <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">b.</span> <span className=" font-bold font-font2">Third-Party Sharing:</span>SCAMalicious may share user information with trusted third-party
service providers to facilitate services, analytics, and marketing. However, user data is not
sold or rented to third parties for their marketing purposes without user consent.</p>
      </div>
      <div>
      <h3 className="text-3xl font-font2 font-bold  my-8">3. Data Security</h3>
        <p className=" text-2xl font-font1 mb-1"><span  className=" font-bold font-font2">a. </span><span  className=" font-bold font-font2">Security Measures:</span> SCAMalicious employs industry-standard security measures to protect
user data from unauthorized access, alteration, disclosure, or destruction.</p>
           <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">b.</span> <span className=" font-bold font-font2">Data Retention:</span> User data is retained only for as long as necessary to provide services or
as required by law. Users can request data deletion in accordance with applicable
regulations.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">4. User Rights</h3>
        <p className=" text-2xl font-font1 mb-1"><span  className=" font-bold font-font2">a. </span><span  className=" font-bold font-font2">Access and Correction:</span> Users have the right to access, correct, or update their personal
information. They can do so by accessing their account settings or contacting SCAMalicious
support</p>
           <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">b.</span> <span className=" font-bold font-font2">Data Portability:</span> Upon request, users can receive a copy of their data in a commonly used
and machine-readable format.</p>
<p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">C.</span> <span className=" font-bold font-font2">Data Deletion::</span> Users can request the deletion of their account and associated data.
However, certain information may be retained as necessary for legal or legitimate business
purposes.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">5. {`Children's`} Privacy</h3>
        <p className=" text-2xl font-font1 mb-1">SCAMalicious is not intended for children under the age of 13. If a user is under 13, parental
consent is required for account creation and data processing.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">6. Updates to Privacy Policy</h3>
           <p className=" text-2xl font-font1 mb-1">SCAMalicious reserves the right to update the Privacy Policy. Users will be notified of any
material changes through the App/Website.</p>
<p className=" text-2xl font-font1 mb-1"><span  className=" font-bold font-font2">b. </span><span  className=" font-bold font-font2">Account Termination:</span> SCAMalicious reserves the right to terminate user accounts in case
of violation of these Terms and Conditions.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  mt-8">7. User Consent</h3>
        <p className=" text-2xl font-font1">By using SCAMalicious, users consent to the collection, processing, and storage of their
information as outlined in this Privacy Policy.
Users can withdraw their consent for data processing by deleting their account or contacting
SCAMalicious support.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">8. Communication Preferences</h3>
        <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">a.</span> <span className=" font-bold font-font2">Marketing Communications:</span> TUsers can choose to receive promotional communications
and can opt-out at any time by following the provided instructions or contacting support.</p>
<p className=" text-2xl font-font1 mb-1"><span  className=" font-bold font-font2">b. </span><span  className=" font-bold font-font2">Transactional Communications:</span> Users cannot opt-out of essential communications
related to their account or service updates.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">9. Third-Party Links</h3>
        <p className=" text-2xl font-font1 mb-1">SCAMalicious may contain links to third-party websites or services. This Privacy Policy
applies solely to information collected on SCAMalicious, and SCAMalicious is not responsible
for the privacy practices of external sites.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">10. Data Transfers</h3>
        <p className=" text-2xl font-font1 mb-1">User data may be transferred and processed in countries outside the {`user's`} country of
residence, where data protection laws may differ. SCAMalicious takes measures to ensure
adequate protection of transferred data.</p>

      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">11. Compliance with Laws</h3>
        <p className=" text-2xl font-font1 mb-1">SCAMalicious may disclose user information if required by law or in response to valid legal
requests from government authorities.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">12. Contact Information</h3>
        <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">a.</span> <span className=" font-bold font-font2">Contact:</span>Users can contact SCAMalicious regarding privacy-related concerns or inquiries
using the provided contact information.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">13. Analytics and Advertising</h3>
        <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">a.</span> <span className=" font-bold font-font2">Analytics Services:</span>SCAMalicious may use third-party analytics services to analyze user
interactions and improve services. These services may collect and process data in
accordance with their privacy policies.</p>
<p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">b</span> <span className=" font-bold font-font2">Advertising:</span> SCAMalicious may use advertising partners or networks. These partners may
collect information through cookies or similar technologies to provide tailored
advertisements. Users can manage ad preferences through settings or opt-out mechanisms
provided by these partners.</p>

      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">14. User Contributions and Public Information</h3>
        <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">a.</span> <span className=" font-bold font-font2">User Contributions:</span> Any information or content voluntarily provided by users in public
areas of SCAMalicious may be viewed and used by others. Users should exercise caution
when sharing personal information publicly.</p>
<p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">a.</span> <span className=" font-bold font-font2">Moderation:</span> SCAMalicious reserves the right to moderate user-contributed content to
ensure compliance with guidelines and remove inappropriate content.</p>
      </div>

      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">115. Data Breach Notification</h3>
        <p className=" text-2xl font-font1">In the event of a data breach that compromises user data, SCAMalicious will notify affected
users promptly as required by law.</p>
      </div>
      <div>
      <h3 className="text-3xl font-font2 font-bold  my-8">16. Business Transfers</h3>
      <p className=" text-2xl font-font1"> In the event of a merger, acquisition, or sale of assets, user information may be transferred
as part of the transaction. Users will be notified of any change in ownership or control of
their information.</p>
      </div>
      <div>
      <h3 className="text-3xl font-font2 font-bold  my-8 ">17. Consent to Processing Outside Home Country</h3>
      <p className=" text-2xl font-font1"> By using SCAMalicious, users acknowledge and consent to the transfer and processing of
their information outside their country of residence, including to countries with different
data protection laws.</p>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">19. Changes to the Privacy Policy</h3>
        <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">a.</span> <span className=" font-bold font-font2">Policy Updates:</span> SCAMalicious reserves the right to modify this Privacy Policy at any time.
Any changes will be effective upon posting the updated policy on the App/Website.</p>
<p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">b.</span> <span className=" font-bold font-font2"> Notification of Changes:</span> Users will be notified of significant changes to the Privacy Policy
via email or through a notice on the App/Website.</p>

      </div>  
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">20. User Acknowledgment</h3>
        <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">a.</span> <span className=" font-bold font-font2">Acceptance of Policy:</span> By continuing to use SCAMalicious after revisions to the Privacy
Policy, users acknowledge and agree to the updated terms.</p>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">21. How to Contact Us</h3>
        <p className=" text-2xl font-font1 mb-1">For questions, concerns, or requests regarding this Privacy Policy or data privacy practices,
users can contact SCAMalicious via the provided contact details.</p>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">22. Language Interpretation</h3>
        <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">a.</span> <span className=" font-bold font-font2">Contact:</span>This Privacy Policy is originally written in English. In case of any discrepancies between
translated versions and the original English version, the English version prevails.</p>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">23. Effective Date</h3>
        <p className=" text-2xl font-font1 mb-1">This Privacy Policy is effective as of December 2, 2023. Updates or revisions will be effective
from the date of publication.</p>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">24. Governing Law</h3>
        <p className=" text-2xl font-font1 mb-1">SCAMalicious operates in accordance with applicable laws and regulations globally but does
not warrant compliance with specific laws of individual jurisdictions.</p>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">25. Severability</h3>
        <p className=" text-2xl font-font1 mb-1">In the event that any provision of this Privacy Policy is deemed to be invalid or
unenforceable, the remainder of the provisions shall remain in full force and effect.</p>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">26. Entire Agreement</h3>
        <p className=" text-2xl font-font1 mb-1">This Privacy Policy constitutes the entire agreement between users and SCAMalicious
concerning the collection, use, and processing of personal information, superseding any
prior agreements or understandings.</p>
<div>
        <h3 className="text-3xl font-font2 font-bold  my-8">27. User Responsibility to Review</h3>
        <p className=" text-2xl font-font1 mb-1">Users are responsible for regularly reviewing this Privacy Policy for any updates or changes.</p>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">25. Severability</h3>
        <p className=" text-2xl font-font1 mb-1"><span className=" font-bold font-font2">a.</span> <span className=" font-bold font-font2">Contact:</span>In the event that any provision of this Privacy Policy is deemed to be invalid or
unenforceable, the remainder of the provisions shall remain in full force and effect.</p>
      </div>
      </div>
      <div>
        <h3 className="text-3xl font-font2 font-bold  my-8">27. User Responsibility to Review</h3>
        <p className=" text-2xl font-font1 mb-1">Users are responsible for regularly reviewing this Privacy Policy for any updates or changes.</p>
      </div>
      <div className="pb-10">
        <h3 className="text-3xl font-font2 font-bold  my-8">28. Consent</h3>
        <p className=" text-2xl font-font1 mb-1">By using SCAMalicious, users signify their acceptance of this Privacy Policy and agree to its
terms and conditions.</p>
      </div>
      </div>

</div>
<Footer/>
    </div>
  )
}

export default Privacy