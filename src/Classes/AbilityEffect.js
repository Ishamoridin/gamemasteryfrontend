import { colourMatcher, getComplimentaryColours } from "../Components/Stylers";
export default class AbilityEffect {
    constructor (quantity, unit, perSecond, type, nature, element){
        this.quantity = quantity;
        this.unity = unit;
        this.perSecond = perSecond;
        this.type = type;
        this.nature = nature;
        this.element = element;
        this.colour = getComplimentaryColours(colourMatcher(element))
    }
}