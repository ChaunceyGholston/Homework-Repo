class Xbox {
    constructor(game,type,price){
        this.game = game;
        this.type = type;
        this.price = price;
    }
}
const xbox = new Xbox ('console', 'hardware', '599.99');
const xboxHalo = new Xbox ('videogame', 'first person shooter', '59.99');

console.log(xbox);
console.log(xboxHalo);