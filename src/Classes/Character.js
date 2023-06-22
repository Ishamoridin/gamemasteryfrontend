import { updateCharacter } from "../utils";

const CharacterPlaceholderImage = require("../Images/CharacterPlaceholderImage.jpg");
export default class Character {
    constructor(forename, middlenames, surname, race, extras){
        this.current = new subCharacter(forename, middlenames, surname, race, extras);
        this.inherent = new subCharacter(forename, middlenames, surname, race, extras);
        this.visible = new subCharacter(forename, middlenames,surname, race, extras);
        this.temporary = new subCharacter(forename, middlenames, surname, race, extras);
        this.image = {
            url: CharacterPlaceholderImage,
            description: "This is where your character description goes",
        };
        this.campaign = [];
        this.active = false;
    }
    makeCurrentMoreInherent(currentObject, inherentObject, degree) {
        let newObject = {};
        for (let key in currentObject) {
            if (inherentObject.hasOwnProperty(key)) {
                newObject[key] = inherentObject[key] * degree + currentObject[key] * (1 - degree);
            } else {
                newObject[key] = currentObject[key];
            }
        }
        currentObject = newObject;
        return currentObject;
    }
        
    makeTemporaryMoreCurrent(temporaryObject, currentObject, degree) {
        let newObject = {};
        for (let key in currentObject) {
            if (temporaryObject.hasOwnProperty(key)) {
                newObject[key] = currentObject[key] * degree + temporaryObject[key] * (1 - degree);
            } else {
                newObject[key] = currentObject[key];
            }
        }
        temporaryObject = newObject;
        return temporaryObject;
    }
    saveCharacterSession(){
        updateCharacter(this)
    }
}
class subCharacter {
    constructor(forename, middlenames, surname, race, extras){    
        this.basicInfo.forename = forename;
        this.basicInfo.middlenames = middlenames;
        this.basicInfo.surname  = surname;
        this.basicInfo.race = race;
        this.extras = extras;
        this.attributes.physical = {
                strength:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
                agility:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
                stamina:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
        };
        this.attributes.mental = {
                intelligence:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
                memory:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
                awareness:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
        };
        this.attributes.social = {
                influence:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
                composure:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
                presence:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
        };
        this.attributes.magical = {
                manaIntensity:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
                manaControl:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                },
                manaCapacity:{
                    value:(this.multiplier*(this.base+this.modifier)),
                    base:10,
                    multiplier:1,
                    modifier:0,
                }
        };
        this.skills = {
            tier01:[],
            tier02:[],
        };
        this.affinities = {
            fire:{
                initial: 0,
                maximum: 100,
                rate: 1,
            },
            earth:{
                initial: 0,
                maximum: 100,
                rate: 1,
            },
            metal:{
                initial: 0,
                maximum: 100,
                rate: 1,
            },
            water:{
                initial: 0,
                maximum: 100,
                rate: 1,
            },
            wood:{
                initial: 0,
                maximum: 100,
                rate: 1,
            },
            air:{
                initial: 0,
                maximum: 100,
                rate: 1,
            },
        };
        this.history = {};
    };        
};