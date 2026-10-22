import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import Counter from "./components/Counter";
import ChaiList from "./components/ChaiList";
import type { Chai } from "./types";
import OrderForm from "./components/OrderForm";
import Card from "./components/Card";

const menu: Chai[] = [
  { name: "Green Tea", price: 2.99, isSpecial: false },
  { name: "Black Tea", price: 3.49, isSpecial: true },
  { name: "Mint Tea", price: 4.29, isSpecial: false },
];

function App() {
  return (
    <>
      <div>
        {" "}
        <ChaiCard name="Green Tea" price={2.99} />
        <ChaiCard name="Black Tea" price={3.49} isSpecial={true} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed", order.name, order.quantity);
          }}
        />
      </div>
      <div>
        <Card title="This is card" footer="Yash" />
      </div>
    </>
  );
}

export default App;
