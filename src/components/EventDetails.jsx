import PropTypes from "prop-types";

EventDetails.propTypes = {
  dates: PropTypes.string,
  location: PropTypes.string,
};

function EventDetails({ dates, location }) {
  return (
    <>
      <div className="px-5 pb-4">
        <div className="mb-2">
          <img className="pe-3" src="src\assets\date-icon.svg"></img>
          <span className="fw-bold text-black lead-title">{dates}</span>
        </div>
        <div>
          <img className="pe-3" src="src\assets\map-icon.svg"></img>
          <span className="fw-bold text-black lead-title">{location}</span>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
