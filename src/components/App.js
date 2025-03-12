import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
const [sushiList, setSushiList] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [budget, setBudget] = useState(100);
const [plates, setPlates] = useState([]);

useEffect(() => 
  fetch(API)
   .then(response => response.json())
   .then(data => setSushiList(data))
, []);

const eatSushi = (sushi) => {
  setBudget(budget - sushi.price);
  setPlates([...plates, sushi]);
  setSushiList(
    sushiList.map((s) =>
      s.id === sushi.id ? {...s, eaten: true} : s
    )
  );
};

const handleMoreSushi = () => {
  setCurrentIndex((prevIndex) => prevIndex + 4);
}

  return (
    <div className="app">
      <SushiContainer 
      sushiList={ sushiList .slice(currentIndex, currentIndex + 4)} 
      eatSushi={eatSushi}
      budget={budget}
      onClick={handleMoreSushi}
      />
      <Table 
      plates={plates} budget={budget} 
      />
    </div>
  );
}

export default App;
