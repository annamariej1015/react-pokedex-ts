import React, {useState, useEffect} from 'react';
import './App.css';
import { pokemonData } from './pokemonData';
import PokedexList from '../src/components/PokedexList';
import NavBar from '..//src/components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import PokedexItem from './components/PokedexItem';




const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonData);

  //useEffect(() =>{
    //let foundPokemons = pokemonData.filter(pokemon => pokemon.id === +pokemon);
    //setPokemons(foundPokemons);
  //},[]);


  return (
    //<Router>
        <div>
          <NavBar />
          <div className="container">
            <PokedexList pokemons={pokemons} />
              {/*Pokedex 
              <Route path='/' exact component={PokedexList} pokemons={pokemons}/>
              <Route path='/pokemon/:pokemonId' component={PokedexItem} />
              {/*PokeMon*/}
              
          </div>
        </div>
      //</Router>
  );
}

export default App;
