import PropTypes from 'prop-types';


const MusicTownServices = ({musicServiceCard}) => {
console.log(musicServiceCard);

  return (
    <>
      <div className="card w-80">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-actions justify-center">
          <button className="btn btn-primary w-full">Details</button>
        </div>
      </div>
    </>
  );
};

MusicTownServices.propTypes = {
  musicServiceCard: PropTypes.array.isRequired
}

export default MusicTownServices;
