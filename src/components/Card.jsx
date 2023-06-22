import "./Card.css";

const Card = ({ title, heading, children }) => {
  return (
    <>
      <div className="bg-white h-100 d-flex flex-column">
        <div className="px-5 pt-5">
          <p className="text-uppercase fw-bold text-black mb-4 lead-title">
            {title}
          </p>
          <h1 className="fw-bold text-black mb-3">{heading}</h1>
        </div>
        <div className="flex-grow-1">{children}</div>
      </div>
    </>
  );
};

export default Card;
