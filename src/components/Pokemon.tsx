import React, {useEffect, useState} from 'react';
import './components.css'
import axios from "axios";

interface Props{
    name: string,
    url: string

    index: number
}

interface Details{
    weight: number,
    height: number
}
export const Pokemon:React.FC<Props> = ({name, url, index}) => {
    const [details, setDetails] = useState<Details | undefined>()
    console.log(index)
    const onHover = () => {
        if(details === undefined) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`).then((res: any) => {
                setDetails({
                    weight: res.data.weight,
                    height: res.data.height
                })
            })
        }
    }

    return(
        <div className="pokemon-container" onMouseEnter={onHover}>
            <div className="pokemon-container-inner">
                <p className='text-transparent'>#{index}</p>
                <h3>{name.charAt(0).toUpperCase() + name.substring(1, name.length)}</h3>
                {details &&
                    <div className="pokemon-details">
                        <p className='text-transparent'>Weight: {details?.weight}</p>
                        <p className='text-transparent'>Height: {details?.height}</p>
                    </div>
                }

            </div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}/>
        </div>
    )
}