import { useLoaderData } from "react-router-dom";
import Head from "../Shared/Head";
import Leftnsv from "../Shared/Leftnsv";
import Nav from "../Shared/Nav";
import Rightnav from "../Shared/Rightnav";
import Breaking from "./Breaking";
import Newscard from "./Newscard";

const Home = () => {
    const newses = useLoaderData()
    console.log(newses)
    return (
        <div>
            <div className="">
            <Head></Head>
            <Breaking></Breaking>

            <Nav></Nav>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=" ">
                    <Leftnsv></Leftnsv>
                </div>
{/* news container */}
                <div className="md:col-span-2 ">
                   
        {
            newses.map(aNews => <Newscard 
            key={aNews.id}

            news= {aNews}
                ></Newscard> )
        }
                </div>
                <div className="">
                    <Rightnav></Rightnav>
                </div>
            </div>
        </div>
    );
};

export default Home;