export const races = [
    "Human"
]

export function applyRace(race, character)  {
    switch (race){
    case "Human":{character.affinity.keys.map((key) => {character.affinity[key].mod *= 2})};break;

    default : console.log('Invalid Race');break;
}};