import { useState } from "react";
import styled from "styled-components";
import { applyRace, races } from "../WorldSettings/races";
import Character from "../Classes/Character"

export default function CharacterCreation({player}) {
    const [forename, setForename] = useState();
    const [surname, setSurname] = useState();
    const [middlename, setMiddlename] = useState([]);
    const [race, setRace] = useState();
    const submitHandler = () => {
        const newCharacter = new Character(forename, surname, middlename, race, "");
        applyRace(newCharacter.race, newCharacter);
        player.character.push(forename+" "+surname)
    }
    return (
        <CharacterCreationWrapper>
            <CharacterCreationForm onSubmit={submitHandler} label="Character creation form">
                <CharacterForenameInput onChange={(event) => setForename(event.target.value)} label="Forename input"/>
                <CharacterMiddlenameInput onChange={(event) => setMiddlename(event.target.value)} label="Middlename input"/>
                <CharacterSurnameInput onChange={(event) => setSurname(event.target.value)} label="Surname input"/>
                <CharacterRaceInput onChange={(event) => setRace(event.target.value)} label="Race selection">
                    {races.map((race, index) => {return (<option value={race} key={index} label={race}>{race}</option>)})}
                </CharacterRaceInput>
                <CharacterCreationSubmit label="Create character"/>
            </CharacterCreationForm>
        </CharacterCreationWrapper>
    )};
const CharacterCreationWrapper = styled.div``;
const CharacterCreationForm = styled.form``;
const CharacterForenameInput = styled.input``;
const CharacterMiddlenameInput = styled.input``;
const CharacterSurnameInput = styled.input``;
const CharacterRaceInput = styled.select``;
const CharacterCreationSubmit = styled.button``;