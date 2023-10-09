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
              <p>Description:
               {description}
              </p>
              <p>Price: {price}</p>
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

export default DetailsCard;
