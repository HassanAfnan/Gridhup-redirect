import logo from "./logo.svg";
import "./App.css";
import GridLogo from "./Assets/Gridhup.png";

function App() {
  return (
    <div className="App">
      <img src={GridLogo} />
      <p className="main-heading">Congratulations</p>
      <p className="sub-heading">Your account has been created</p>

      <a className="finish-btn" href="app://gridhup/createroomsetup">
        Finish
      </a>
    </div>
  );
}

export default App;
