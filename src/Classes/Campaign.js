export default class Campaign {
    constructor (GM, CampaignName){
        this.GMName = GM;
        this.CampaignName = CampaignName;
        this.playerList = [];
        this.history = []
    }
    addPlayer(playerName){this.playerList.push(playerName)}
    listPlayers(){return this.playerList}
    removePlayer(playerName){this.playerList.splice(this.playerList.indexOf(playerName), 1)}
}