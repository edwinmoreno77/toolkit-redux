import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";



export const getPokemons = (page = 0) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        //TODO http request
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();

        //Use axios to make a request to the API

        // const { data } = await pokemonApi.get(`/api/user?limit=${page * 10}&from=0`);
        // dispatch(setPokemons({ pokemons: data.users, page: page + 1 }));


        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);

        //TODO dispatch action
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));

    }

}