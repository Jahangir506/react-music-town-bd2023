import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from "prop-types";
import { useEffect } from "react";

const MusicTownServices = ({ musicServiceCard }) => {
  const {name,brands_info, img} = musicServiceCard || {};

  useEffect(()=> {
    AOS.init({duration: 2000});
  },[])

  return (
    <>
      <div className="card" data-aos ="zoom-in">
        <div>
          <figure>
            <img
              src={img}
              alt="Shoes"
              className="rounded-t"
            />
          </figure>
          <div className="card-actions justify-center">
            <button className="w-full bg-red-400 py-4 hover:bg-red-600 rounded-b text-white">{name}</button>
          </div>
        </div>
      </div>
    </>
  );
};

MusicTownServices.propTypes = {
  musicServiceCard: PropTypes.array.isRequired,
};

export default MusicTownServices;
