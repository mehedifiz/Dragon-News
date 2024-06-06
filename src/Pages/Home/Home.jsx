import Head from "../Shared/Head";
import Leftnsv from "../Shared/Leftnsv";
import Nav from "../Shared/Nav";
import Rightnav from "../Shared/Rightnav";
import Breaking from "./Breaking";

const Home = () => {
    return (
        <div>
            <Head></Head>
            <Breaking></Breaking>

            <Nav></Nav>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <Leftnsv></Leftnsv>
                </div>

                <div className="md:col-span-2 border">
                    <h2 className="text-4xl">news</h2>
                </div>
                <div className="border">
                    <Rightnav></Rightnav>
                </div>
            </div>
        </div>
    );
};

export default Home;