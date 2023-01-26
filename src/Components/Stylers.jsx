export function colourMatcher(entity){
    switch(entity){
        case 'stamina': return ('#fffd7c');
        case 'health': return ('#ff0000');
        case 'fire': return ('#d34300');
        case 'water': return ('#003dc0');
        case 'wind': return ('#9cc700');
        case 'earth': return ('#4b2a00');
        case 'wood': return ('#006d0968');
        case 'metal': return ('#ffe600');
        default: return ('#ff00ff');
}};
export function getLighterComplimentaryColor(color) {
    // Convert the color to RGB
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    // Get the complimentary color
    let rC = (255 - r);
    let gC = (255 - g);
    let bC = (255 - b);

    // Lighten the complimentary color
    let rCL = Math.floor((rC + 255) / 2);
    let gCL = Math.floor((gC + 255) / 2);
    let bCL = Math.floor((bC + 255) / 2);

    // Convert the color back to hex and return it
    let hex = "#" + ((1 << 24) + (rCL << 16) + (gCL << 8) + bCL).toString(16).slice(1);
    return hex;
};
export function getComplimentaryColours(colour) {
    // Convert the color to RGB
    let r = parseInt(colour.substring(1, 3), 16);
    let g = parseInt(colour.substring(3, 5), 16);
    let b = parseInt(colour.substring(5, 7), 16);

    // Get the complimentary color
    let rC = (255 - r);
    let gC = (255 - g);
    let bC = (255 - b);

    // Create the first complimentary color
    let rCF1 = Math.floor(rC * 0.8);
    let gCF1 = Math.floor(gC * 0.8);
    let bCF1 = Math.floor(bC * 0.8);
    let hexCF1 = "#" + ((1 << 24) + (rCF1 << 16) + (gCF1 << 8) + bCF1).toString(16).slice(1);

    // Create the second complimentary color
    let rCF2 = Math.floor((rC + 255) / 2);
    let gCF2 = Math.floor((gC + 255) / 2);
    let bCF2 = Math.floor((bC + 255) / 2);
    let hexCF2 = "#" + ((1 << 24) + (rCF2 << 16) + (gCF2 << 8) + bCF2).toString(16).slice(1);

    // Return an array of the seed color, first complimentary color, and second complimentary color
    return [colour, hexCF1, hexCF2];
}
