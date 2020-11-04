import logo from './logo.svg';
import './App.css';
import Hello from './myComponents/Hello';
import Welcome from './myComponents/Welcome';
import Header from './myComponents/Header';
import StateComponent from "./myComponents/State";
import Game from './Demo';

function App() {
  return (
    <div className="App">
      Md. Pappu Miahn
        <Header />
        <Hello name="Hello1"></Hello>
        <Welcome name="Welcome-1"></Welcome>
        <Game />

        <StateComponent></StateComponent>
    </div>
  );
}

export default App;