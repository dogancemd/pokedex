import 'bootstrap/dist/css/bootstrap.css';
import './PokedexListItem.scss';

const convertThePokemonName = (name) => {
    name = name.toLowerCase();
    if (name.includes("'")) {
        name = name.replace("'", "_");
    }
    return name;
}



const PokedexListItem = ({ pokemon , onClickFunc}) => {
    let url = process.env.PUBLIC_URL + "/img/pokemons/" + convertThePokemonName(pokemon.Name) + ".png";
    
    return (
    //<div className='container'>
        <div className="PokedexListItem" onClick={()=>onClickFunc()}>
            <div className="PokedexRow">
                <div className='PokemonImgBG'>
                    <img className='Pokemonimg' src={(url)} alt={pokemon.Name} />
                </div>
                <div className='PokedexNamePlate'>
                    <h1 >{(pokemon.No>100?pokemon.No:pokemon.No>10?"0"+pokemon.No:"00"+pokemon.No) + "." + pokemon.Name}</h1>
                </div>
            </div>
        </div>
    //</div>    
    );
}

export default PokedexListItem;