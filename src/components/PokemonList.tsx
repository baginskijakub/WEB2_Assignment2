import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Pokemon } from "./Pokemon";
import {PaginationButton} from "./utils/PaginationButton";

interface IPokemon{
    name: string
    url: string
    index: number
}

export const PokemonList:React.FC = () => {
    const [pokemons, setPokemons] = useState<IPokemon[] | null>(null);
    const [currentPagination, setCurrentPagination] = useState<number>(1)
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(currentPagination - 1)*20}`).then((res: any) => {
            console.log(res.data.results[0].url.split('/')[6])
            const tempPokemons = res.data.results.map((pokemon: any) => {
               return {
                   name: pokemon.name,
                   url: pokemon.url,
                   index: pokemon.url.split('/')[6]
               }
            })
            setPokemons(tempPokemons)
        })
    }, [currentPagination])
    
    return(
        <div className='pokemons-list-container'>
            <div className="pokemons-list-wrapper">
                {pokemons && pokemons.map((pokemon: IPokemon, index) => {
                    return (
                        <Pokemon
                            key={index}
                            name={pokemon.name}
                            url={pokemon.url}
                            index={pokemon.index}
                        />
                    )
                })}

            </div>
            <div className='pagination-container'>
                <PaginationButton pageNumber={1} onClick={() => setCurrentPagination(1)}/>
                <PaginationButton pageNumber={2} onClick={() => setCurrentPagination(2)}/>
                <PaginationButton pageNumber={3} onClick={() => setCurrentPagination(3)}/>
                <PaginationButton pageNumber={4} onClick={() => setCurrentPagination(4)}/>
                <PaginationButton pageNumber={5} onClick={() => setCurrentPagination(5)}/>
            </div>
        </div>
    )
}