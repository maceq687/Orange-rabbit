import "./App.css";
import Card from "./components/card";

function App() {
  const participants = [
    {
      id: 0,
      name: "john",
      email: "john@wp.en",
      phone: "+4511223344",
      birthdate: "01011990",
    },
    {
      id: 1,
      name: "adam",
      email: "adam@wp.en",
      phone: "+4555667788",
      birthdate: "02011990",
    },
  ];

  ("use strict");

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  return (
    <>
      <div className="position-absolute min-vh-100 min-vw-100 black-fill"></div>
      <div className="position-absolute min-vh-100 min-vw-100 background-image blurred-background"></div>
      <div className="min-vh-100 min-vw-100 d-flex align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col px-0 event-logo">
              <img src="src\assets\danny-howe-bn-D2bCvpik-unsplash 1.png"></img>
            </div>
            <div className="col-3 px-0">
              <Card
                title="Signup for the event"
                heading="Orange Rabbit Festival 2023"
              >
                <div className="px-5 pb-4">
                  <div className="mb-2">
                    <img className="pe-3" src="src\assets\date-icon.svg"></img>
                    <span className="fw-bold text-black lead-title">
                      24 June 2023 - 1 July 2023
                    </span>
                  </div>
                  <div>
                    <img className="pe-3" src="src\assets\map-icon.svg"></img>
                    <span className="fw-bold text-black lead-title">
                      Bunny Avenue 22, 2023, Rabbitkilde
                    </span>
                  </div>
                </div>
                <hr className="m-0 dotted" />
                <form className="px-5 pt-4 pb-5 needs-validation" noValidate>
                  <div className="mb-4">
                    <label
                      for="nameFormControl"
                      className="form-label fw-semibold text-black"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameFormControl"
                      placeholder="Full name"
                      required
                    />
                    <div className="invalid-feedback">Please enter name.</div>
                  </div>
                  <div className="mb-4">
                    <label
                      for="emailFormControl"
                      className="form-label fw-semibold text-black"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailFormControl"
                      placeholder="Email"
                      required
                    />
                    <div className="invalid-feedback">Please enter email.</div>
                  </div>
                  <div className="mb-4">
                    <label
                      for="phoneFormControl"
                      className="form-label fw-semibold text-black"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneFormControl"
                      placeholder="Phone"
                      pattern="[0-9]{8}"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter phone number.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      for="birthdateFormControl"
                      className="form-label fw-semibold text-black"
                    >
                      Your birthdate
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="birthdateFormControl"
                      placeholder="Birthdate"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter birthdate.
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-add-participant fw-bold text-white fs-5"
                  >
                    <span className="align-middle">Add participant</span>
                    <img src="src\assets\add.svg" className="ms-3"></img>
                  </button>
                </form>
              </Card>
            </div>
            <div className="col-3">
              <Card
                title="Your participants"
                heading={`${participants.length} participants`}
              >
                <hr className="m-0 dotted" />
                <div className="h-100 d-flex flex-column fw-semibold">
                  <div className="pt-3 flex-grow-1">
                    <span className="px-5 pt-4 pb-5 d-none">
                      No participants added...
                    </span>
                    <div className="">
                      {participants.map((participant) => (
                        <div key={participant.id}>
                          <div className="px-5 d-flex flex-wrap">
                            <div className="w-100 name">{participant.name}</div>
                            <div className="w-50 opacity-50">Birthdate:</div>
                            <div className="w-50 opacity-50 text-end">
                              {participant.birthdate}
                            </div>
                            <div className="w-50 opacity-50">Email:</div>
                            <div className="w-50 opacity-50 text-end">
                              {participant.email}
                            </div>
                            <div className="w-50 opacity-50">
                              {" "}
                              Phone number:
                            </div>
                            <div className="w-50 opacity-50 text-end">
                              {participant.phone}
                            </div>
                          </div>
                          <hr></hr>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-submit fw-bold text-white fs-5 d-flex justify-content-between"
                      disabled
                    >
                      <span className="align-middle">Submit</span>
                      <img
                        src="src\assets\arrow-right.svg"
                        className="align-self-center"
                      ></img>
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
