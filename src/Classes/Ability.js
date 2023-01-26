import { colourMatcher, getComplimentaryColours } from "../Components/Stylers";
const AbilityPlaceholderImage = require("../Images/AbilityPlaceholderImage");
export default class Ability {
    constructor (tier, rank, name, element, [...primaryEffect], [...secondaryEffect]){
        this.tier = tier;
        this.rank = rank;
        this.abilityName = name;
        this.element = element;
        this.primaryEffect = [...primaryEffect];
        this.secondaryEffect = [...secondaryEffect];
        this.totalItemisationPoints = this.calculateTotalItemisationPoints()
        this.icon = {
            url: AbilityPlaceholderImage,
            alt: `${name} is an ability of ${element} element. It is tier ${tier}, rank ${rank}.`
        };
        this.colour = getComplimentaryColours(colourMatcher(element));
        this.icon = {
            image: AbilityPlaceholderImage,
            description: "Description of image goes here"
        }
    }
    calculateTotalItemisationPoints(){
        let totalPoints = 0;
        this.primaryEffect.forEach((effect) => totalPoints += effect.itemisationCost);
        this.secondaryEffect.forEach((effect) => totalPoints += effect.itemisationCost);
        return totalPoints
    }
}