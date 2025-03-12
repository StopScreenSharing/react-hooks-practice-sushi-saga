import React from "react";

function Sushi({ sushi, eatSushi, budget}) {

  const handleClick = () => {
    if (budget >= sushi.price) {
      eatSushi(sushi);
    } else {
      alert("Not enough budget!");
    }
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {!sushi.eaten ? (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        ) : null}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
