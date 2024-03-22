import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input type="number" placeholder="Buscar por id" value={props.id} onChange={(event) => { props.setId(event.target.value) }} />
      <input type="text" placeholder="Buscar por nome" value={props.name} onChange={(event) => { props.setName(event.target.value) }} />
      <select value={props.order} onChange={(event) => { props.setOrder(event.target.value) }}>
        <option value="">Ordenar</option>
        <option value="cre">Crescente</option>
        <option value="dec">Decrescente</option>
      </select>
      <select name="tipo" id="tipo" value={props.type} onChange={(event) => { props.setType(event.target.value) }}>
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
