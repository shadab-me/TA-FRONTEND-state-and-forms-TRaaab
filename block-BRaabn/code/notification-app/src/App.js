import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex-main">
      <div className="nav-section">
        <Nav />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
