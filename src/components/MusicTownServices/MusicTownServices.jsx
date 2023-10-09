import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MusicTownServices = ({ musicServiceCard }) => {
  const { id, name, img, description, price } = musicServiceCard || {};

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        className="card w-80 shadow-2xl rounded-t-md rounded-b-md"
        data-aos="fade-up"
      >
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="p-5 text-white">
          <p className="text-center">
            <span className="text-lg font-bold">{name}</span>{" "}
          </p>
          <div className="mt-3">
            <span>Description: </span>
            {
              description.length > 150 ?
              <span className="opacity-75">{description.slice(0,150)} <Link to={`/details/${id}`} className="text-blue-600">Read More...</Link></span>
              :
              <span className="opacity-75">{description}</span>
            }
          </div>
          <p>
            <span>Price:</span>
            <span className="opacity-75"> {price}</span>
          </p>
        </div>
        <Link to={`/details/${id}`}>
          <button className="py-4 w-full rounded-b-md  bg-white/10 hover:bg-white/30 text-white text-lg">
            Details Information
          </button>
        </Link>
      </div>
    </>
  );
};

MusicTownServices.propTypes = {
  musicServiceCard: PropTypes.object.isRequired,
};

export default MusicTownServices;
