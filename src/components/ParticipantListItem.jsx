import PropTypes from "prop-types";

ParticipantListItem.propTypes = {
  participant: PropTypes.object,
  handleRemove: PropTypes.func,
};

function ParticipantListItem({ participant, handleRemove }) {
  return (
    <>
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
        <div className="w-50 opacity-50 text-end">{participant.birthdate}</div>
        <div className="w-50 opacity-50">Email:</div>
        <div className="w-50 opacity-50 text-end">{participant.email}</div>
        <div className="w-50 opacity-50"> Phone number:</div>
        <div className="w-50 opacity-50 text-end">{participant.phone}</div>
      </div>
      <hr />
    </>
  );
}

export default ParticipantListItem;
