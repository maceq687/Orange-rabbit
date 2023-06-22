import "./App.css";
import Card from "./components/card";

function App() {
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
                <hr className="m-0" />
                <div className="px-5 pt-4 pb-5">
                  <div className="mb-4">
                    <label
                      for="nameFormControl"
                      className="form-label fw-semibold text-black"
                    >
                      Your name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="nameFormControl"
                      placeholder="Full name"
                    />
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
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="phoneFormControl"
                      className="form-label fw-semibold text-black"
                    >
                      Phone number
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="phoneFormControl"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="birthdateFormControl"
                      className="form-label fw-semibold text-black"
                    >
                      Your birthdate
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="birthdateFormControl"
                      placeholder="Birthdate"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-add-participant fw-bold text-white fs-5"
                  >
                    <span className="align-middle">Add participant</span>
                    <img src="src\assets\add.svg" className="ms-3"></img>
                  </button>
                </div>
              </Card>
            </div>
            <div className="col-3">
              <Card title="Your participants" heading="0 participants">
                <hr className="m-0" />
                <div className="h-100 d-flex flex-column">
                  <div className="px-5 pt-4 pb-5 flex-grow-1">
                    <span>No participants added...</span>
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
