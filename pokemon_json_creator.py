import json
import pandas as pd

# Read the CSV file
df = pd.read_csv('pokemon.csv')
df.to_json('pokemon.json', orient='records')
print(df.head())



