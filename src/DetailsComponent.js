import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailsComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state;

  return (
    <div className="details">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>Details for {item.Nation}</h2>
      <p>ID Nation: {item["ID Nation"]}</p>
      <p>Population: {item.Population}</p>
      <p>Year: {item.Year}</p>
    </div>
  );
};

export default DetailsComponent;
