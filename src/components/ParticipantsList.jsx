import PropTypes from "prop-types";

ParticipantsList.propTypes = {
  participants: PropTypes.array,
  handleRemove: PropTypes.func,
  handleListSubmit: PropTypes.func,
};

function ParticipantsList({ participants, handleRemove, handleListSubmit }) {
  return (
    <>
      <div className="h-100 d-flex flex-column fw-semibold">
        <div className="pt-3 flex-grow-1">
          {participants.length > 0 && (
            <div className="">
              {participants.map((participant) => (
                <div key={participant.id}>
                  <div className="px-5 d-flex flex-wrap position-relative">
                    {participant.id != 0 && (
                      <img
                        src="src\assets\trash.svg"
                        className="btn p-0 position-absolute top-0 end-0 me-4 bg-white"
                        onClick={(event) => handleRemove(event, participant.id)}
                      ></img>
                    )}
                    <div className="w-100 name">{participant.name}</div>
                    <div className="w-50 opacity-50">Birthdate:</div>
                    <div className="w-50 opacity-50 text-end">
                      {participant.birthdate}
                    </div>
                    <div className="w-50 opacity-50">Email:</div>
                    <div className="w-50 opacity-50 text-end">
                      {participant.email}
                    </div>
                    <div className="w-50 opacity-50"> Phone number:</div>
                    <div className="w-50 opacity-50 text-end">
                      {participant.phone}
                    </div>
                  </div>
                  <hr></hr>
                </div>
              ))}
            </div>
          )}
          {participants.length == 0 && (
            <span className="px-5 pt-4 pb-5">No participants added...</span>
          )}
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-submit fw-bold text-white fs-5 d-flex justify-content-between"
            disabled={participants.length == 0}
            onClick={handleListSubmit}
          >
            <span className="align-middle">Submit</span>
            <img
              src="src\assets\arrow-right.svg"
              className="align-self-center"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default ParticipantsList;
