interface Pokemon {
    name: string;
    url: string;
  }
  
  interface FetchPokemonsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
  }
  
  export const fetchPokemons = async (limit: number = 20, offset: number = 0): Promise<FetchPokemonsResponse> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Failed to fetch pokemons');
    }
    const data: FetchPokemonsResponse = await response.json();
    return data;
  };

  export const fetchPokemonByName= async (name: string): Promise<FetchPokemonsResponse> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error('Failed to fetch pokemons');
    }
    const data = await response.json();
    return data;
  };

  
  