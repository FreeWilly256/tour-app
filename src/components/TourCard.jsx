import { useState } from "react";

function TourCard({ id, name, info, price, image, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore((prev) => !prev)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
      <button className="remove-btn" onClick={() => onRemove(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default TourCard;

  