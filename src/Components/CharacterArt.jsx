import { useState, useEffect } from "react";
import styled from "styled-components";
const CharacterPlaceholderImage = require("../Images/CharacterPlaceholderImage.jpg");

export default function CharacterArt({character}){
    <ArtFrame 
    src={character.image ? character.image.url : CharacterPlaceholderImage}
    alt={character.image ? character.image.description : "Image of the character"}
    
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