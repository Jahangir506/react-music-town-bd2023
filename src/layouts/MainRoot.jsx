import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBg from "../components/Header/HeaderBg";

const MainRoot = () => {
  return (
    <div className="font-roboto">
      <div>
        <HeaderBg></HeaderBg>
      </div>
      <div className=" max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainRoot;
