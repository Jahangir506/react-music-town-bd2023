import bgNav from "../../assets/images/bg-navbar.png";
import Navbar from "./Navbar.jsx/Navbar";

const HeaderBg = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <div>
          <img src={bgNav} alt="image 1" className="w-full h-[500px]" />
        </div>
        <div className="absolute inset-0 w-full place-items-center bg-black/30">
          <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default HeaderBg;
