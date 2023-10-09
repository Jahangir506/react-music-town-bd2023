import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MusicTownServices = ({ musicServiceCard }) => {
  const { id, name, brands_info, img } = musicServiceCard || {};

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="card w-80 shadow-2xl rounded-t-md rounded-b-md" data-aos="flip-up">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-white">
          <p className="text-center">
            <span className="text-lg">{name}</span>{" "}
          </p>
          <p>
            <span className="text-md">Description:</span>{" "}
          </p>
          <p>
            <span className="text-md">Price:</span>{" "}
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
  musicServiceCard: PropTypes.array.isRequired,
};

export default MusicTownServices;
