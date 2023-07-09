export default class Effect {
    constructor(name, damage, cost, type, tier, itemisationCost, visibility){
        this.effectName = name;
        this.damage = damage;
        this.cost = cost;
        this.type = type;
        this.tier = tier;
        this.itemisationCost = itemisationCost;
        this.visibility = visibility;
    }
    applyEffect(user, target){}
}