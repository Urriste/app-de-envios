import "./App.css";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/">
        <Main />
      </Route>
    </Router>
  );
}

export default App;
