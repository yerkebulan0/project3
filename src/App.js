import logo from "./logo.svg";
import "./App.css";
import Top from "./Top/top";
import Button from "./buttons/button";
import Mid from "./middle/mid";
import CheckboxList from "./checkbox/CheckboxList";

function App() {
  return <div className="App">
    <Top/>
    <Button/>
    < Mid/>
    <CheckboxList/>
    
  </div>;
}

export default App;
