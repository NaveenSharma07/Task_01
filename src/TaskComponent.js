import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const TaskComponent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        if (!response) {
          throw new Error("Network error");
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = (item) => {
    navigate(`/details/${item.Nation}`, { state: { item } });
  };

  return (
    <div className="data-cards-container">
      {data.map((item, index) => (
        <div className="card" key={index} onClick={() => handleCardClick(item)}>
          <h3>{item.Nation}</h3>
          <p>Population: {item.Population}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskComponent;
