const UpcomingShow = ({ latestShow }) => {
  const { location, track, date } = latestShow || {};
  return (
    <div>
        <div className="bg-red-50">
            <h1>{track}</h1>
        </div>
    </div>
  );
};

export default UpcomingShow;
