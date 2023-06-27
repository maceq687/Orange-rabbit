import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/card";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantsList from "./components/ParticipantsList";
import EventDetails from "./components/EventDetails";
import ParticipantsSubmitted from "./components/ParticipantsSubmitted";

function App() {
  ("use strict");

  const forms = document.querySelectorAll(".needs-validation");

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

  const [participant, setInputs] = useState({});
  const [participants, setParticipants] = useState([]);
  const [maxIndex, setMaxIndex] = useState(0);
  const [participantsList, setParticipantsList] = useState(false);
  const [listSubmitted, setListSubmitted] = useState(false);
  const [payload, setPayload] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newParticipant = participant;
    newParticipant.id = maxIndex;
    let date = new Date(newParticipant.birthdate);
    newParticipant.birthdate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    setMaxIndex(maxIndex + 1);
    setInputs({});
    setParticipants((previousState) => [...previousState, newParticipant]);
    document.getElementById("signupForm").classList.remove("was-validated");
    setParticipantsList(true);
  };

  const handleRemove = (_event, id) => {
    setParticipants((previousState) =>
      previousState.filter((item) => item.id !== id)
    );
  };

  const handleListSubmit = () => {
    setListSubmitted(true);
    setPayload({
      main_participant: participants[0],
      sub_participants: participants.slice(1),
    });
  };

  useEffect(() => {
    console.log(payload);
  }, [payload]);

  const handleMoreTickets = () => {
    setListSubmitted(false);
    setParticipantsList(false);
    setParticipants([]);
    setMaxIndex(0);
    setPayload({});
  };

  return (
    <>
      <div className="position-absolute min-vh-100 min-vw-100 black-fill"></div>
      <div className="position-absolute min-vh-100 min-vw-100 background-image blurred-background"></div>
      <div className="min-vh-100 min-vw-100 d-flex align-items-center">
        <div className="container-fluid">
          {!listSubmitted && (
            <div className="row justify-content-center">
              <div className="col px-0 event-logo">
                <img src="src\assets\danny-howe-bn-D2bCvpik-unsplash 1.png"></img>
              </div>
              <div className="col-3 px-0">
                <Card
                  title="Signup for the event"
                  heading="Orange Rabbit Festival 2023"
                >
                  <EventDetails
                    dates="24 June 2023 - 1 July 2023"
                    location="Bunny Avenue 22, 2023, Rabbitkilde"
                  />
                  <hr className="m-0 dotted" />
                  <ParticipantForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    participant={participant}
                  />
                </Card>
              </div>
              {participantsList && (
                <div className="col-3">
                  <Card
                    title="Your participants"
                    heading={`${participants.length} participants`}
                  >
                    <hr className="m-0 dotted" />
                    <ParticipantsList
                      participants={participants}
                      handleRemove={handleRemove}
                      handleListSubmit={handleListSubmit}
                    />
                  </Card>
                </div>
              )}
            </div>
          )}
          {listSubmitted && (
            <div className="row justify-content-center">
              <ParticipantsSubmitted handleMoreTickets={handleMoreTickets} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
