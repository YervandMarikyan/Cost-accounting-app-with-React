import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Phone",
    amount: 600
  },
  {
    id: "c2",
    date: new Date(2022, 7, 12),
    description: "TV",
    amount: 1000
  },
  {
    id: "c3",
    date: new Date(2021, 11, 12),
    description: "Laptop",
    amount: 1200
  }
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(previousState => {
      return [cost, ...previousState]
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;