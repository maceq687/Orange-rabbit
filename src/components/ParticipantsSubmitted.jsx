import PropTypes from "prop-types";

ParticipantsSubmitted.propTypes = {
  handleMoreTickets: PropTypes.func,
};

function ParticipantsSubmitted({ handleMoreTickets }) {
  return (
    <>
      <div className="bg-white d-flex flex-column w-auto py-5 px-0">
        <div className="d-flex flex-column align-items-center p-5">
          <img src="src\assets\check.svg" className="d-flex"></img>
          <p className="text-uppercase fw-bold text-black mt-4 mb-1 lead-title">
            Confirmation
          </p>
          <h1 className="fw-bold text-black mb-3">Signup complete</h1>
          <p className="">We look forward seeing you at the event</p>
          <button
            type="submit"
            className="btn btn-add-participant fw-bold text-white fs-5"
            onClick={handleMoreTickets}
          >
            <span className="align-middle">Order more tickets</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ParticipantsSubmitted;
