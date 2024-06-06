import Head from "../Shared/Head";
import Leftnsv from "../Shared/Leftnsv";
import Nav from "../Shared/Nav";
import Rightnav from "../Shared/Rightnav";

const Home = () => {
    return (
        <div>
            <Head></Head>

            <Nav></Nav>
            <h2 className="text-centerfont-pop font-extrabold">Home page </h2>

            <div className="grid lg:grid-cols-4 gap-6">
                <div>
                    <Leftnsv></Leftnsv>
                </div>

                <div className="col-span-2">
                    <h2 className="text-4xl">news</h2>
                </div>
                <div>
                    <Rightnav></Rightnav>
                </div>
            </div>
        </div>
    );
};

export default Home;