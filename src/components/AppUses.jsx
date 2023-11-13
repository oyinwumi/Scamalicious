import Appuse from "../assets/appuse.png";
import { Link } from "react-router-dom";


const AppUses = () => {
  return (
    <div className="px-20 py-8 text-[#252528] ">
        <h3 className="text-center font-font2 text-3xl font-normal ">What Our Mobile Application Is For?</h3>
        <div className="flex  w-full mt-10">
           <div className="w-[60%]">
           <p className="  text-xl font-font1 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum id ex ullamcorper pellentesque. In ultricies nisi vel lacinia vulputate. Etiam at accumsan leo. Fusce rutrum dapibus nunc, ac mollis tortor mollis sed. Proin et orci porta, tempus lorem quis, convallis arcu. Nullam tincidunt nisi quis urna cursus, ut suscipit odio rhoncus. Vivamus rutrum, mi sit amet sagittis dapibus, ante ligula pulvinar enim, sed lacinia massa ante ut leo. Maecenas vel elit mi. Cras at pharetra tellus, at placerat nunc. Etiam mattis metus eget libero malesuada pretium. Nullam fermentum at ex id imperd Fusce bibendum pulvinar magna dapibus sollicitudin. Pellentesque luctus lectus sed mi suscipit fermentum. Phasellus ac felis sem. Phasellus nec condimentum purus, vel elementum tortor. Sed facilisis urna nec luctus suscipit. In pulvinar erat in magna volutpat dapibus et a neque. Mauris massa eros, finibus eget lorem quis, interdum imperdiet orci. In feugiat arcu vitae vulputate interdum. Maecenas sem lectus, mattis eget efficitur eget, vehicula vitae nunc. Curabitur quis nisl dolor. Praesent sem nulla, ullamcorper fringilla ante  vehicula vitae nunc. Curabitur quis nisl dolor. Praesent sem nulla, ullamcorper fringilla ante. </p>
           <Link to="/download">  <button className= "bg-yellow text-center shadow-lg shadow-black-500 text-[#202020] w-[224px] h-[56px] border-yellow rounded-lg text-[22px] font-semibold font-font1 items-center  mt-10">Download Now </button></Link>
           </div>
            <img src={Appuse} alt="" className="w-[40%] h-[430px]  ml-14 object-contain" />
        </div>
    </div>
  )
}

export default AppUses