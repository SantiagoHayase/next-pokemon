import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const resp = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: resp.data.id,
    name: resp.data.name,
    sprites: resp.data.sprites,
  };
};
