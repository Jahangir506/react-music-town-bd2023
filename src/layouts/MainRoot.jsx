import Marquee from "react-fast-marquee";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBg from "../components/Header/HeaderBg";

const MainRoot = () => {
  return (
    <div className="font-roboto bg-red-300">
      <div>
        <HeaderBg></HeaderBg>
      </div>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      {/* <di>
        <p className="text-center text-xl font-bold mb-3">🎼Trending Songs🎼</p>
          <Marquee speed={100} pauseOnHover>
           <p className="mr-4"><span className="text-lg text-red-600">Arfin Rumuy: </span> Tomar Cokh a Akash amar🎵</p>
           <p className="mr-4"><span className="text-lg text-red-600">Imran: </span> Tomar Cokh a Akash amar🎵</p>
           <p className="mr-4"><span className="text-lg text-red-600">Hridoy Khan: </span> Tomar Cokh a Akash amar🎵</p>
           <p className="mr-4"><span className="text-lg text-red-600">Habib: </span> Tomar Cokh a Akash amar🎵</p>
           <p className="mr-4"><span className="text-lg text-red-600">James: </span> Tomar Cokh a Akash amar🎵</p>
           <p className="mr-4"><span className="text-lg text-red-600">Arjit Sing: </span> Tomar Cokh a Akash amar🎵</p>
          </Marquee>
        </di> */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainRoot;
