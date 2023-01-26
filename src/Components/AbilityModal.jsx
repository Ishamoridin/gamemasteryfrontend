import { useState } from "react";
import { colourMatcher } from "./Stylers";
import styled from "styled-components"

function AbilityWrapper(props){
    return (<OuterBox>
        <TextBox>{props.title}</TextBox>
    </OuterBox>)
};
function FluffBox(props){
    return (<InnerBox
    background-color={props.colours.secondary}
    border-color={props.colours.primary}
    />)
};
function CrunchBox(props){
    const abilityArray = [...props.ability.primaryEffect, ...props.ability.secondaryEffect]
    return (
        <InnerBox
        background-color={props.ability.colour[1]}
        border-color={props.ability.colour[0]}
        >
            {abilityArray.map((attribute, index) => {
                return (
                    <AbilityAttributeBoxlet
                    ability={props.ability}
                    key={index}
                    attribute={attribute}                    
                    />

                )
            })}
        </InnerBox>)
};
function AbilityAttributeBoxlet(props){
    return (
        <InnerBox
        background-color={props.ability.colours.secondary}
        border-color={props.ability.colours.primary}        
        >
            <TextBox>{props.attribute.name}</TextBox>
            <InnerBox
            background-color={props.ability.colours.secondary}
            border-color={props.ability.colours.primary}        
            >
                <TextBox
                color={() => colourMatcher(props.attribute.unit)}
                >{props.attribute.value}</TextBox>
                <TextBox
                color={() => colourMatcher(props.attribute.unit)}
                >{props.attribute.unit}</TextBox>
            </InnerBox>
            
        </InnerBox>
    )
};
function AbilityIcon({tier, icon}){
    return (
        <Icon 
            src={icon.url}
            alt={icon.alt}
            value={tier}
        />
    )
};
function AbilityDescription({description}){
    
};

function AbilityTitle({name}){
    <Header>{name}</Header>
}

export default function AbilityModal({ability}) {
    const [isOpen, toggleOpen] = useState(false);


    return (
        <AbilityWrapper
        onClick={() => toggleOpen(!isOpen)}
        >
            {isOpen ? (<><FluffBox
            colours={ability.colours}
            >
                <AbilityIcon
                icon={ability.icon}
                tier={ability.tier}
                />
                <AbilityDescription
                description={ability.description}
                />
            </FluffBox>
            <CrunchBox
            ability={ability}
            /></>)
            :
            (
                <>
                    <AbilityTitle title={ability.name}/>
                    <AbilityIcon icon={ability.icon}/>
                </>    
            )
            }
        </AbilityWrapper>
        )
}
const InnerBox = styled.div`

`;
const OuterBox = styled.div`

`;
const Icon = styled.img`

`;
const TextBox = styled.p`
    
`;
const Header = styled.h1`
    
`