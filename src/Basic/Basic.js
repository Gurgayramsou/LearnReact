import { useState } from "react";
import "./Basic.css";

const items = [
  { name: "Pant", price: "90" },
  { name: "Tshirt", price: "70" },
  { name: "Shorts", price: "30" },
];

function Basic() {
  const moneyInPocket = 100;
  const leastMoneyToBuy = 50;
  const [count, setCount] = useState(0);

  function purchaseUpdate() {
    setCount(count + 1);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Product Gallery</h1>
      {moneyInPocket > leastMoneyToBuy && (
        <div className="prodContainer">
          <Products modifyCount={purchaseUpdate} setCount />
        </div>
      )}
      <p style={{ textAlign: "center", marginTop: "3%" }}>
        total Item purchased = {count}
      </p>
    </>
  );
}

export function PurchseButton(args) {
  const { modifyCount } = args;
  return (
    <button id="purchaseBtn" onClick={modifyCount}>
      Purchase
    </button>
  );
}

export function Products(args) {
  const { modifyCount } = args;
  return items.map((item) => (
    <div className="prodBox">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <PurchseButton modifyCount={modifyCount} />
    </div>
  ));
}

export default Basic;
