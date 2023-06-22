import { useState, useEffect } from "react";
import styled from "styled-components";
import {readPlayerCharacters, updatePlayer, readCharacter} from "../utils/index"
export default async function PlayerProfile({player}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [detailsUpdated, setDetailsUpdated] = useState(false);
    const [characterArray, setCharacterArray] = useState([]);
    const [activeCharacterArray, setActiveCharacterArray] = useState([]);
    const [inactiveCharacterArray, setInactiveCharacterArray] = useState();
    function updateCharacterArrays(){
        setActiveCharacterArray([]); setInactiveCharacterArray([]);
        characterArray.length >=1 && characterArray.forEach((character, index) => {
            switch (character.active){
                case true : setActiveCharacterArray(activeCharacterArray.push(character));break;
                case false : setInactiveCharacterArray(inactiveCharacterArray.push(character));break;
                default : console.log(character);break;
            }
        })
    };
    updateCharacterArrays();
    function buildStatObject(character){
        let statObject = {}
        character.attributes.keys.forEach((bigStat) => {
            bigStat.keys.forEach((littleStat) => {
                statObject[`${littleStat}`] = bigStat.littleStat
            })
        })
        return statObject
    }
    async function ActiveCharacterCard({character}){
        const [cardStats, setCardStats] = useState({});
        const [statObject, setStatObject] = useState({});
        useEffect (() => {
            const newStatObject = buildStatObject(character);
            setStatObject(newStatObject)
        }, [character])
        useEffect(() => {
            setCardStats(statObject)
        }, [statObject])
        return (
            <CardWrapper>
                <CardName />
                <CardImage />
                <CardStats stats={cardStats} />
            </CardWrapper>
        );

    };
    async function CardStats({character}){
        return (
            character.current.attribute.keys.map((attribute, index) => {
                const cardText = `${attribute}:${meanAttribute(character.current.attribute)}`;
                return (<CardText key={index}>{cardText}</CardText>)
            })
        )
    }
    function meanAttribute(attribute){
        let total = 0;
        attribute && 
        (attribute.keys >= 1 && 
        (attribute.keys.forEach((keyName) => total += attribute[keyName].value)));
        const mean = total/attribute.keys.length;
        return mean
        }
    async function InactiveCharacterCard({character}){
        const [cardPhysical, setCardPhysical] = useState(0);
        const [cardMental, setCardMental] = useState(0);
        const [cardSocial, setCardSocial] = useState(0);
        const [cardMagic, setCardMagic] = useState(0);
        useEffect(() => {
            setCardPhysical(meanAttribute(character.physical))
            setCardMental(meanAttribute(character.mental))
            setCardSocial(meanAttribute(character.social))
            setCardMagic(meanAttribute(character.magic))
        }, [character]);
        function CardStats(){

            return(
                <ul>
                    <li><p>PHY {cardPhysical}</p></li>
                    <li><p>MEN {cardMental}</p></li>
                    <li><p>SOC {cardSocial}</p></li>
                    <li><p>MAG {cardMagic}</p></li>
                </ul>
            )
        }
            return (
                <CardWrapper>
                    <CardName />
                    <CardImage />
                    <CardStats />
                </CardWrapper>
            );
        };
        useEffect(() => {
            async function refreshCharacterArray(){
                let newCharacterArray = []
                try {
                    const playerCharacters = await readPlayerCharacters(player);
                        playerCharacters.length >= 1 && playerCharacters.forEach(async(playerCharacter) => {
                            const characterObject = await readCharacter(playerCharacter);
                            newCharacterArray.push(characterObject)
                    });
                    setCharacterArray(newCharacterArray)
                } catch (error) {
                    console.log(error)
                }
            }
            refreshCharacterArray()
        }, [player]);
        async function PlayerCharacterDisplay(){
            return (
            <CharacterDisplayWrapper>
                <ActiveCharacterBox>
                    {activeCharacterArray.map((character, index) => {return <ActiveCharacterCard key={index} character={character}/>})}
                </ActiveCharacterBox>
                <InactiveCharacterBox>
                    {inactiveCharacterArray.map((character, index) => {return <InactiveCharacterCard key={index} character={character}/>})}
                </InactiveCharacterBox>
            </CharacterDisplayWrapper>    
        )
    };
    async function updatePlayerDetails(){
        try {
            const updatedUser = await updatePlayer({username: username, password: password});
            updatedUser.status === 200 && setDetailsUpdated()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PlayerProfileWrapper>
            <PlayerDetailsForm onSubmit={updatePlayerDetails}>
            <input type="input" placeholder={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <p style={{visibility: detailsUpdated}}>Details Updated</p>
            </PlayerDetailsForm>
            <PlayerCharacterDisplay />
        </PlayerProfileWrapper>
    )
};
const PlayerProfileWrapper = styled.div``;
const PlayerDetailsForm = styled.form``;
const CardWrapper = styled.div``;
const CardName = styled.div``;
const CardImage = styled.img``;
const CardText = styled.p``;
const CharacterDisplayWrapper = styled.div``;
const ActiveCharacterBox = styled.div``;
const InactiveCharacterBox = styled.div``;

