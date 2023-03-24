import React, { FunctionComponent, useState, useEffect } from "react";
import PokeType from "../Models/pokemon";
import PokeTab from "../Models/mock-pokemon";
import PokemonCard from "../components/pokemon-card";

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<PokeType[]>([]);

  useEffect(() => {
    setPokemons(PokeTab);
  }, []);
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((poke) => (
            <PokemonCard key={poke.id} poketprop={poke} borderColor="blue" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
