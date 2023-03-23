import React, { FunctionComponent, useState } from "react";
import POKEMONS from "./Models/moke-pokemon";
import Pokemon from "./Models/pokemon";

const App: FunctionComponent = () => {
  const [pokemons,setPokemons] = useState<Pokemon[]>(POKEMONS);

  return <h1>Salut, il y a {pokemons.length} Pokemons dans la liste</h1>;
};

export default App;
