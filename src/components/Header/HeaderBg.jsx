import bgNav from "../../assets/images/bg-navbar.png";
import Navbar from "./Navbar.jsx/Navbar";

const HeaderBg = () => {
  return (
    <div className="relative w-full">
      <img
        src={bgNav}
        alt="image 1"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 h-full w-full place-items-center bg-black/30 s">
        <div className="max-w-6xl mx-auto">
          <Navbar></Navbar>
        </div>
      </div>
    </div>
  );
};

export default HeaderBg;
