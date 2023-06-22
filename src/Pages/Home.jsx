import LoadCharacter from "../Components/LoadCharacter";
import CharacterArt from "../Components/CharacterArt";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home({setPlayer, player}) {
    // const navigate = useNavigate();
    let index = 0;
    const [currentCharacter, setCurrentCharacter] = useState({});
    function clickHandler() {
        player && (player.character.length < index ? index++ : index = 0)
    };
    useEffect(() => {
        player && setCurrentCharacter(player.character ? player.character[index] : {})
    }, [player, index])
    return (
        <HomeWrapper onClick={clickHandler}>
            <PlayerName value={player ? player.name : "Please Log In"} /*onClick={player ? navigate("/UserProfile") : navigate("/Login")}*/ />
            {player ? <CharacterArt character={currentCharacter}/> : <LoadCharacter setPlayer={setPlayer} character={currentCharacter} player={player}/>}
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    display:flex;
`
const PlayerName = styled.p`
    
`