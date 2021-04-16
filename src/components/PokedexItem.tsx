import React from 'react';

interface PokedexItemProps{
    pokemon: Pokemon;
}

const PokedexItem: React.FC<PokedexItemProps> = ({pokemon}) => {
    return(
        <div className="card border-warning mb-3">
            <div className="card-header">{pokemon.name}</div>
            <div className="card-body text-warning">
                <h5 className="card-title">{pokemon.type}</h5>
                <p className="card-text">{pokemon.weaknesses}</p>
            </div>
        </div>
        
    )
};

export default PokedexItem;
