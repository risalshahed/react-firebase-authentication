import React from 'react';
import { useNavigate } from 'react-router-dom';

const EachService = ({ eachService }) => {
  const { img, title, rate, description } = eachService;

  const navigate = useNavigate();

  const handleClient = () => {
    navigate('/checkout');
  }

  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>Rate: <span>${rate}</span> </h4>
      <p title={description}>
        {
          description.length > 200
          ?
          `${description.slice(0, 200)}...`
          :
          description
        }
      </p>

      {/* handleClient while they click on get a service */}
      <button onClick={handleClient}>Get {title} Service</button>

    </div>
  );
};

export default EachService;