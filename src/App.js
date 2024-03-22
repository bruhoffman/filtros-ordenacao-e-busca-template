import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [order, setOrder] = useState("");

  return (
    <>
      <GlobalStyle />
      <Header id={id} setId={setId} name={name} setName={setName} type={type} setType={setType} order={order} setOrder={setOrder} />
      <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            return pokemon.id.includes(id)
          })

          .filter((pokemon) => {
            return pokemon.name.english.toLowerCase().includes(name.toLowerCase())
          })

          .sort((a, b) => {
            switch (order) {
              case "cre":
                return (a.name.english < b.name.english) && -1
              case "dec":
                return (a.name.english > b.name.english) && -1
              default:
                return 0
            }
          })

          .filter((pokemon) => {
            if (pokemon.type.includes(type)) {
              return pokemon
            } else if (!type) {
              return pokemons
            }
          })

          .map((pokemon) => {
            return <PokemonCard
              cardColor={getColors(pokemon.type[0])}
              key={pokemon.id}
              pokemon={pokemon}
            />
          })}
      </CardsContainer>
    </>
  );
}

export default App;
