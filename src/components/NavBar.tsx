import { useState, useEffect } from "react";
import React from 'react';
import {pokemonData} from '../pokemonData';



const NavBar: React.FC = () => {
    const[pokemons, setPokemons] = useState<Pokemon[]>(pokemonData);
    const[searchTerm, setSearchTerm] = useState<Pokemon[]>(pokemonData);

    useEffect(() => {
        const foundPokemon = pokemonData.filter(pd =>{
            return(
                pd.name.toLowerCase().includes(searchTerm.toLowerCase()) +
                pd.type.toLowerCase().includes(searchTerm.toLowerCase()) +
            );
        });
        searchTerm === '' ? setPokemons(pokemonData) : setPokemons(foundPokemon);
    }, [searchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    return(
        
            <nav className="navbar navbar-expand-lg bg-warning mb-4">
                <a className="navbar-brand text-dark" href="#">Pokedex</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input 
                            className="form-control mr-sm-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleChange}
                            />
                        <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
        
            </nav>
    );
};

export default NavBar;