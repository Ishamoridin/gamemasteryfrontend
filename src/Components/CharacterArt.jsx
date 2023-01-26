import { useState, useEffect } from "react";
import styled from "styled-components";
const CharacterPlaceholderImage = require("../Images/CharacterPlaceholderImage.jpg");

export default function CharacterArt({character}){
    <ArtFrame 
    src={character.icon ? character.icon.image : CharacterPlaceholderImage}
    alt={character.icon ? character.icon.description : "Image of the character"}
    
    />
};
const ArtFrame = async({src, alt}) => {
    <ImageArt
        src={src}
        alt={alt}
    />
}

const ImageArt = styled.img`
    
`