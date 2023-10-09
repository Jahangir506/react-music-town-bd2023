import PropTypes from 'prop-types';
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const UpcomingShow = ({latestShow}) => {
    const {track,time, date, location} = latestShow || {};
  return (
    <div>
      <div className="bg-rose-500/0 flex items-center justify-between py-4 bg-gradient-to-l from-rose-900 my-8">
        <div className="flex justify-between w-1/2">
          <div className="flex items-center">
            <div className="bg-rose-500/75 p-5">
              <FaCalendar className="text-white text-2xl" />
            </div>
            <div className="ml-4 text-2xl text-white">
              <p>{date}</p>
              <p>April</p>
            </div>
          </div>
          <h1 className="mr-24 text-3xl text-white"> {track}</h1>
        </div>
        <div className="flex justify-between w-1/2">
          <div className="flex items-center">
            <div className="bg-rose-500/75 p-5">
              <FaLocationDot className="text-3xl text-white" />
            </div>
            <div className="ml-4 text-white">
              <h1 className="text-3xl"> {location}</h1>
              <p className="text-lg">{time}</p>
            </div>
          </div>
          <div className="card-actions justify-end items-center">
            <button className="px-5 py-3 bg-blue-600 text-white mr-8 hover:bg-blue-700">Buy Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

UpcomingShow.propTypes = {
    latestShow: PropTypes.object.isRequired
}


export default UpcomingShow;
