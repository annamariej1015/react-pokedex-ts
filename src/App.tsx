import React, {useState} from 'react';
import './App.css';
import { pokemonData } from './pokemonData';
import PokedexList from '../src/components/PokedexList';
import PokedexItem from '../src/components/PokedexItem';



const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonData);

  return (
    <div className="container">
      {/*Pokedex */}
      <PokedexList pokemons={ pokemons }/>
      {/*PokeMon*/}
    </div>
  );
}

export default App;
