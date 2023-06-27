import PropTypes from "prop-types";
import ParticipantListItem from "./ParticipantListItem";

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
                <ParticipantListItem
                  key={participant.id}
                  participant={participant}
                  handleRemove={handleRemove}
                />
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
