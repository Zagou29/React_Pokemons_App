import React, { FunctionComponent, useState } from "react";
import PokeType from "../Models/pokemon";
import "./pokemon-card.css";
type Props = {
  poketprop: PokeType;
  borderColor?: string;
};
const PokemonCard: FunctionComponent<Props> = ({
  poketprop,
  borderColor = "#009688",
}) => {
  const [color, setColor] = useState<string>("");
  const showBorder = () => {
    setColor(borderColor);
  };
  const hideBorder = () => {
    setColor("#f5f5f5");
  };
  const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  const formatType = (type: string): string => {
    let colors: string;

    switch (type) {
      case "Feu":
        colors = "red lighten-1";
        break;
      case "Eau":
        colors = "blue lighten-1";
        break;
      case "Plante":
        colors = "green lighten-1";
        break;
      case "Insecte":
        colors = "brown lighten-1";
        break;
      case "Normal":
        colors = "grey lighten-3";
        break;
      case "Vol":
        colors = "blue lighten-3";
        break;
      case "Poison":
        colors = "deep-purple accent-1";
        break;
      case "Fée":
        colors = "pink lighten-4";
        break;
      case "Psy":
        colors = "deep-purple darken-2";
        break;
      case "Electrik":
        colors = "lime accent-1";
        break;
      case "Combat":
        colors = "deep-orange";
        break;
      default:
        colors = "grey";
        break;
    }

    return `chip ${colors}`;
  };
  console.log(color)
  return (
    <div
      className="col s6 m4"
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
    >
      <div className="card  horizontal" style={{ borderColor: color }}>
        <div className="card-image">
          <img src={poketprop.picture} alt={poketprop.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{poketprop.name}</p>
            <p>
              <small>{formatDate(poketprop.created)}</small>
            </p>
            {poketprop.types.map((typ) => (
              <span key={typ} className={formatType(typ)}>{typ}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;
