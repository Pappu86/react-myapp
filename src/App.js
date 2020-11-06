import logo from './logo.svg';
import './App.css';
import Hello from './myComponents/Hello';
import Welcome from './myComponents/Welcome';
import Header from './myComponents/Header';
import StateComponent from "./myComponents/State";
import Login from "./myComponents/LogInOut";
import VariableElements from "./myComponents/VariableElements";
import Refresh from "./myComponents/Refresh";
import DomRender from "./myComponents/DomRender";

function App() {
  return (
    <div className="App">
        <Login />
        <hr />
        <Header />
        <h2 className="title">Founctional component example</h2>
        <hr />
        <Hello name="Hello1"></Hello>
        <h2 className="title">Class component example</h2>
        <hr />
        <Welcome name="Welcome-1"></Welcome>
        <h2 className="title">Element variable example</h2>
        <hr />
        <VariableElements />
        <h2 className="title">State example</h2>
        <hr />
        <StateComponent></StateComponent>
        <h2 className="title">Refresh example</h2>
        <hr />
        <Refresh />
        <h2 className="title">React Dom example</h2>
        <hr />
        <DomRender />
    </div>
  );
}

export default App;