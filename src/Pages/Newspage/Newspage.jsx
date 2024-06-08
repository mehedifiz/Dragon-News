import { useParams } from "react-router-dom";
import Head from "../Shared/Head";
import Rightnav from "../Shared/Rightnav";
import Nav from "../Shared/Nav";

const Newspage = () => {
    const {id} =useParams();

    return (
        <div>

            <Head></Head>
            <Nav></Nav>

            <div className="grid md:grid-cols-4">

                <div className="col-span-3">

                    <h2 className="text-5xl">News Details of </h2>
                    <p>{id}</p>
                </div>
                <div>
                    <Rightnav></Rightnav>
                </div>


            </div>

            
            
        </div>
    );
};

export default Newspage;