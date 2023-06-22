import { useState, useEffect } from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard.jsx";
import {readPlayerCharacters} from "../utils"
const CharacterPlaceholderImage = require("../Images/CharacterPlaceholderImage.jpg");
export default async function LoadCharacter({player, character, setCharacter}) {
    const [loadedCharacter, loadCharacter] = useState({});
    const [characterArray, setCharacterArray] = useState([]);
    const refreshCharacterArray = async() => {
        const newCharacterArray = await readPlayerCharacters(player);
        setCharacterArray(newCharacterArray);
    };
    const loaderClickHandler = async() => {await refreshCharacterArray()}
    useEffect(() => {
        loadCharacter(character)
    }, [character])
    useEffect(() => {
        setCharacter(loadedCharacter)
    }, [loadedCharacter, setCharacter])
    return (
        <>
        <CharacterLoader
        src={loadedCharacter ? loadedCharacter.url : CharacterPlaceholderImage}
        alt="Load Character"
        onClick={loaderClickHandler}
        />
        {characterArray.map((character, index) => {return(<CharacterCard character={character} key={index}/>)})}
        <CharacterLoaderRefresher onClick={() => refreshCharacterArray()}/>
        </>
    )
};
const CharacterLoader = styled.img`
    
`
const CharacterLoaderRefresher = styled.button`
    
`