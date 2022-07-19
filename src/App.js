import logo from "./logo.svg";
import "./App.css";
import GridLogo from "./Assets/Gridhup.png";

function App() {
  return (
    <div className="App">
      <img src={GridLogo} />
      <p>Congratulations</p>
      <p>Your account has been created</p>
      <div>
        <a href="app://gridhup/login">Finish</a>
      </div>
    </div>
  );
}

export default App;
