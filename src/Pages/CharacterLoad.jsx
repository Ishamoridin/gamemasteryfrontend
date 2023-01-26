import styled from "styled-components";
import LoadCharacter from "../Components/LoadCharacter";
export default function CharacterLoad({player, character, setCharacter}){

    return (
        <CharacterLoadWrapper>
            <LoadCharacter player={player} character={character} setCharacter={setCharacter}/>
        </CharacterLoadWrapper>
    )
};
    const CharacterLoadWrapper = styled.div`
        display: flex;
        flex-flow: column nowrap;
    `