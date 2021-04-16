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
                            <div className='col-sm-12 col-md-3' key={pokemon.id}>
                                <PokedexItem pokemon={pokemon} key={index}/>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
};

export default PokedexList;