import PropTypes from "prop-types";

const MusicTownServices = ({ musicServiceCard }) => {
  const {name,brands_info, img} = musicServiceCard || {};

  return (
    <>
      <div className="card">
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
