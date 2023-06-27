import PropTypes from "prop-types";
import { useRef, useState } from "react";

ParticipantForm.propTypes = {
  onSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  participant: PropTypes.object,
};

function ParticipantForm({ onSubmit, handleChange, participant }) {
  const formRef = useRef();
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (event) => {
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        onSubmit(event);
        setIsInvalid(false);
      } else {
        event.preventDefault();
        event.stopPropagation();
        setIsInvalid(true);
      }
    }
  };
  return (
    <>
      <form
        ref={formRef}
        className={`px-5 pt-4 pb-5 needs-validation ${
          isInvalid ? "was-validated" : null
        }`}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="nameFormControl"
            className="form-label fw-semibold text-black"
          >
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameFormControl"
            placeholder="Full name"
            name="name"
            value={participant.name || ""}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter name.</div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="emailFormControl"
            className="form-label fw-semibold text-black"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailFormControl"
            placeholder="Email"
            name="email"
            value={participant.email || ""}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter email.</div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneFormControl"
            className="form-label fw-semibold text-black"
          >
            Phone number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneFormControl"
            placeholder="Phone"
            name="phone"
            value={participant.phone || ""}
            onChange={handleChange}
            pattern="[0-9]{8}"
            required
          />
          <div className="invalid-feedback">Please enter phone number.</div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthdateFormControl"
            className="form-label fw-semibold text-black"
          >
            Your birthdate
          </label>
          <input
            type="date"
            className="form-control"
            id="birthdateFormControl"
            placeholder="Birthdate"
            name="birthdate"
            value={participant.birthdate || ""}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter birthdate.</div>
        </div>
        <button
          type="submit"
          className="btn btn-add-participant fw-bold text-white fs-5"
        >
          <span className="align-middle">Add participant</span>
          <img src="src\assets\add.svg" className="ms-3"></img>
        </button>
      </form>
    </>
  );
}

export default ParticipantForm;
