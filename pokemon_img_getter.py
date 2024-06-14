from bs4 import BeautifulSoup
import os
import requests
import urllib

url="https://www.giantbomb.com/profile/wakka/lists/the-150-original-pokemon/59579/"
url2="https://www.giantbomb.com/profile/wakka/lists/the-150-original-pokemon/59579/?page=2"
page = requests.get(url)
page2 = requests.get(url2)
pokemonList = BeautifulSoup(page.content, 'html.parser')
pokemonList = pokemonList.findAll('div', class_='img imgboxart') 
pokemonList2 = BeautifulSoup(page2.content, 'html.parser')
pokemonList2 = pokemonList2.findAll('div', class_='img imgboxart')
pokemonList += pokemonList2
for pokemon in pokemonList:
    url_name = pokemon.img['src']
    pokemonName = (url_name.split('-')[-1])[3:].split('.')[0]
    print(pokemonName)

    urllib.request.urlretrieve(pokemon.img['src'], "img/pokemons/" + pokemonName + ".png")
