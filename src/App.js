import logo from './logo.svg';
import './App.css';
import Hello from './myComponents/Hello';
import Welcome from './myComponents/Welcome';
import Game from './Demo';

function App() {
  return (
    <div className="App">
      Md. Pappu Miahn
        <Hello name="Hello1"></Hello>

        <Welcome name="Welcome-1"></Welcome>
        <Welcome name="Welcome-2"></Welcome>
        <Welcome name="Welcome-3"></Welcome>
        <Game />
    </div>
  );
}

export default App;