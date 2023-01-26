import {updatePlayer} from "../utils/index"
export default class Player {
    constructor(name){
    this.currentCampaign =[];
    this.pastCampaign = [];
    this.currentGM = [];
    this.pastGM = [];
    this.playerName = name;
    this.character = [];
    }
    addCharacter(character){this.character.push(character)}
    joinCampaign(campaign){
        this.currentCampaign.push(campaign)
        this.updateGMLists()
    }
    leaveCampaign(campaign){
        this.pastCampaign.push(this.currentCampaign.splice(this.currentCampaign.indexOf(campaign)));
        this.updateGMLists()
    }
    updateGMLists(){
        let GMList = [];
        this.currentCampaign.forEach((campaign) => {
            if(GMList.indexOf(campaign.GMName) === -1){GMList.push(campaign.GMName)} // Make a list of unique GMs for current campaigns
        });
        const missingGMList = [];
        this.currentGM.forEach((GMName) => {
            if (GMList.indexOf(GMName) === -1){missingGMList.push(GMName)} // Check each GM on currentGM to see if they're on GMlist, make a list of those which aren't called missingGMList
        });
        this.currentGM = GMList
        ;
        missingGMList.forEach((GMName) => {
            if (this.pastGM.indexOf(GMName) === -1){this.pastGM.push(GMName)} // Check each GM missingGMList to see if they're listed as pastGMs in this.pastGM, and adds them if not
        });
        this.pastGM.forEach((GMName) => {
            if (this.currentGM.indexOf(GMName) !== -1){this.pastGM.splice(this.pastGM.indexOf(GMName), 1)} // Checks each GM in this.pastGM to see if they're also in this.currentGM, then prunes them from this.pastGM if so.
        });
    }
    async savePlayerSession(){
        updatePlayer(this);
        this.character.map((character) => {return character.saveCharacterSession()})
    }
}