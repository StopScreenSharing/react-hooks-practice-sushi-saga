import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, eatSushi, budget, onClick }) {
  return (
    <div className="belt">
      {sushiList.map((sushi) => (
        <Sushi 
        key={sushi.id}
        sushi={sushi}
        eatSushi={eatSushi}
        budget={budget}
        />
      ))}
      <MoreButton onClick={onClick}/>
    </div>
  );
}

export default SushiContainer;
