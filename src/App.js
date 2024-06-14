import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PokedexListItem from './PokedexListItem';
import { useState } from 'react';
import useWindowDimensions from './WindowResize';
import PokemonCard from './PokemonCard';

const pokemons = require('./pokemon.json');  
console.log(pokemons[0]);

const App = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const Height= useWindowDimensions().height;
  const Width=useWindowDimensions().width;
  console.log(Height);
  return (
      
      <div className="App" >
        <div className='Pokedex' style={{width:(Width*42/100)+"px"}}>
          {
          pokemons.map((pokemon) => (
            <PokedexListItem  pokemon={pokemon} onClickFunc={()=>{setCurrentPokemon(pokemon)}}/>
            ))
          }
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "pokedex_bubble_2.png"}
            style={
              {
                position: "absolute",
                width: Height*0.2+"px",
                height: Height*0.2+"px",
                marginTop: (Height)*0.4+"px",
                left: (Width*42/100-Height*0.1)+"px",
              }
            }
            alt={"Pokedex Bubble"}
            onClick={() => setCurrentPokemon(null)}
          ></img>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flex:"1"}}>
          {currentPokemon ? <PokemonCard pokemon={currentPokemon} Height={Height} Width={Width}/> : <h1>Select a pokemon</h1>}
        </div>
      
        
        
      </div>
  );
}

export default App;
