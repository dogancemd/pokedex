import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PokedexListItem from './PokedexListItem';
import { useState } from 'react';
import useWindowDimensions from './WindowResize';
import PokemonCard from './PokemonCard';
//import { BrowserRouter as Router,Route } from 'react-router-dom';



const pokemons = require('./pokemon.json');  



const App = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemons, setCurrentPokemons] = useState(pokemons);
  const filterPokemons = (filter) => {
    setCurrentPokemons(pokemons.filter((pokemon) => {
      return pokemon.Name.toLowerCase().includes(filter.toLowerCase());
    }));
  }
  const Height= useWindowDimensions().height;
  const Width=useWindowDimensions().width;
  return (
      <div className="App" >
        <div style={{width:(Width*42/100)+"px",backgroundColor:"#7f1717"}}>
          <div className='Search'>
            <input type="text" className="SearchBar" placeholder="Search Pokemon" style={{width:"100%",height:"7vh"}} onChange={(e)=>{filterPokemons(e.target.value)}}></input>
          </div>
          <div className='Pokedex' >
            {
            currentPokemons.map((pokemon) => (
              <PokedexListItem  pokemon={pokemon} onClickFunc={()=>{setCurrentPokemon(pokemon)}}/>
              ))
            }
          </div>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/pokedex_bubble_2.png"}
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
          {currentPokemon ? <PokemonCard pokemon={currentPokemon} Height={Height} Width={Width} setPokemon={setCurrentPokemon}/> : <h1>Select a pokemon</h1>}
        </div>  
      </div>
  );
}

export default App;
