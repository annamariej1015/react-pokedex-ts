import React, {useState} from 'react';
import './App.css';
import { pokemonData } from './pokemonData';
import PokedexList from '../src/components/PokedexList';
import PokedexItem from '../src/components/PokedexItem';



const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonData);

  return (
    <div className="container">
        <h2 className='text-center'>Anna's Pokedex</h2>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <div className="input-group-prepend">
                  <button className="btn btn-warning" type="button" id="button-addon1">Search</button>
                </div>
            </div>
          </div>
        </div>
        {/*Pokedex */}
        <PokedexList pokemons={ pokemons }/>
      {/*PokeMon*/}
    </div>
  );
}

export default App;
