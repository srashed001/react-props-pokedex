import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import './css/App.css'

function App() {
  return (
    <>
    <h1>Pokedex</h1>
    <Pokedex pokemon={Pokemon} />
    </>
  );
}

export default App;
