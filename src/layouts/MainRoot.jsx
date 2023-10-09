import { Outlet } from "react-router-dom";
import bg from "../assets/images/bg.jpg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar.jsx/Navbar";

const MainRoot = () => {
  const bodyStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    margin: 0,
    padding: 0,
  };

  return (
    <div>
      <div style={bodyStyle}>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainRoot;

