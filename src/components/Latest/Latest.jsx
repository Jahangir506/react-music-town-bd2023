import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Latest = ({ latest }) => {
  const { img, title, date } = latest || {};

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div
        className="card w-80 shadow-2xl rounded-t-md rounded-b-md"
        data-aos="fade-left"
      >
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="p-4 w-full rounded-b-md  bg-black/75 text-white text-lg">
          {title}
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Latest;
