import PropTypes from 'prop-types';

const DetailsCard = ({detail}) => {
        const {name, price, img, description} = detail || {};
        console.log(detail);
  return (
    <>
      <div className="pt-20 h-[700px] max-w-6xl mx-auto">
        <div className="card lg:card-side w-full glass">
          <figure>
            <img src={img} className="h-full w-[1000px]" alt="Album" />
          </figure>
          <div className="w-full">
            <div className="card-body  text-white">
              <h2 className="card-title text-center">{name}</h2>
              <div><span className="text-base font-semibold">Description: </span>
             <span className="opacity-75">{description}</span>
              </div>
              <p><span className="text-base font-semibold">Price:</span><span className="opacity-75"> {price}</span></p>
            </div>
            <div className="card-actions  justify-end">
              <button className="py-4 w-full rounded-b-md  bg-white/10 hover:bg-white/30 text-white text-lg">
              Confirm purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DetailsCard.propTypes = {
  detail: PropTypes.array.isRequired
}

export default DetailsCard;
