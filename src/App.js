import { useState } from "react";
import "./App.css";
import Basic from "./Basic/Basic";

const items = [
  { name: "Pant", price: "90" },
  { name: "Tshirt", price: "70" },
  { name: "Shorts", price: "30" },
];

function App() {
  navigationHider();
  quickNavEvent();
  const [selected, setSelected] = useState("Home");
  let main = <Home />;
  if (selected === "Basic") {
    main = <Basic />;
  }
  return (
    <div className="flex-container">
      <nav id="navigation">
        <Navigation setSelected={setSelected} />
      </nav>
      <SentCurrentTime />
      <main>{main}</main>
    </div>
  );
}

// navigation hider code

function navigationHider() {
  setTimeout(() => {
    navigationDisplayHandler("none");
    quickNavigationDisplayHandler("block");
  }, 5000);
}

// quick nav event trigger
function quickNavEvent() {
  document.querySelector("#quickNav ").addEventListener("click", async () => {
    await navigationDisplayHandler("block");
    await navigationHider();
  });
}

async function navigationDisplayHandler(disp) {
  document.querySelector("#navigation").style.display = disp;
}

function quickNavigationDisplayHandler(disp) {
  document.querySelector("#quickNav ").style.display = disp;
}

function Navigation({ setSelected }) {
  const navs = ["Home", "Basic", "help"];
  return (
    <>
      {navs.map((nav) => (
        <NavBtns btnName={nav} setSelected={setSelected} />
      ))}
    </>
  );
}

function SentCurrentTime() {
  const d = new Date();
  return (
    <p>
      {d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds() +
        ":" +
        d.getMilliseconds()}
    </p>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to React class!</h2>
    </div>
  );
}

function NavBtns({ btnName, setSelected }) {
  return (
    <button
      className="navBtn"
      value={btnName}
      onClick={(e) => {
        setSelected(e.target.value);
      }}
    >
      {btnName}
    </button>
  );
}

export default App;
