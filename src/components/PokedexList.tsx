import React from 'react';
import PokedexItem from '../components/PokedexItem';

interface PokedexProps {
    pokemons: Pokemon[];
}

const PokedexList: React.FC<PokedexProps> =({pokemons}) => {
    return(
        
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {pokemons.map((pokemon, index) =>{
                        return(
                            <PokedexItem pokemon={pokemon} key={index}/>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
};

export default PokedexList;