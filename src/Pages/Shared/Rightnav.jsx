import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

import qz1 from '../../assets/qZone1.png'
import qz2 from '../../assets/qZone2.png'
import qz3 from '../../assets/qZone3.png'

const Rightnav = () => {
    return (
        <div>
          <div className="p-4  mb-6">
            <h2 className="font-semibold  ">Login With </h2>
            <button className="btn btn-outline w-full mb-4">
            <FaGoogle />
Google</button>

<button className="btn btn-outline w-full">
            <FaGithub />
Github</button>

          </div>

          <div className="p-4  mb-6">
            <h2 className="font-semibold ">Q Zone</h2>

            <img src={qz1} alt="" />
            <img src={qz2} alt="" />
            <img src={qz3} alt="" />
            

          </div>

          
        </div>
    );
};

export default Rightnav;