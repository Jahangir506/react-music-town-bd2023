import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBg from "../components/Header/HeaderBg";

const MainRoot = () => {
  return (
    <div>
      <div>
        <HeaderBg></HeaderBg>
      </div>
      <div className="h-[300px] max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainRoot;
