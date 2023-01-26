export default class Effect {
    constructor(name, damage, cost, type, tier, itemisationCost){
        this.effectName = name;
        this.damage = damage;
        this.cost = cost;
        this.type = type;
        this.tier = tier;
        this.itemisationCost = itemisationCost;
    }
    applyEffect(user, target){}
}