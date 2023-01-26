import LoadCharacter from "../Components/LoadCharacter";
import CharacterArt from "../Components/CharacterArt";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home({setPlayer, player}) {
    const navigate = useNavigate();
    let index = 0;
    const [currentCharacter, setCurrentCharacter] = useState({});
    function clickHandler() {
        if (player){
            if (player.character.length < index){
                index++
            }
            else {
                index = 0
            }
        } else {

        }
    };
    useEffect(() => {
        setCurrentCharacter(player ? player.character[index] : {})
    }, [player])
    return (
        <HomeWrapper onClick={clickHandler}>
            <PlayerName value={player ? player.name : "Please Log In"} onClick={player ? navigate("/UserProfile") : navigate("/Login")}/>
            {player ? <CharacterArt character={currentCharacter}/> : <LoadCharacter setPlayer={player}/>}
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    display:flex;
`
const PlayerName = styled.p`
    
`