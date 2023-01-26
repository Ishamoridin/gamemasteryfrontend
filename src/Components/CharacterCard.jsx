import styled from "styled-components";
export default function CharacterCard({character}){
    return (
        <CharacterCardWrapper>
            <CharacterCardName value={character.name}/>
            <CharacterCardArt src={character.image.url} alt={character.image.description}/>
            <CharacterCardCampaign value={character.currentCampaign[0] && "Character not part of any current campaigns"}/>
        </CharacterCardWrapper>
    )
};
const CharacterCardWrapper = styled.div``;
const CharacterCardName = styled.h1``;
const CharacterCardArt = styled.img``;
const CharacterCardCampaign = styled.h1``;