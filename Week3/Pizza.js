const pizzaToppings = ["Pepperoni", "Sausage", "Chicken", "Olives"];

function greetCustomer() {
    let greeting = `Welcome to Chauncey's Pizzaria, our toppings are:`;
    for (let topping of pizzaToppings) {
        greeting += `${topping},` ;
    }
    console.log(greeting);
}
greetCustomer();

function getPizzaOrder( size, crust,...toppings){
    let getPizzaOrder = 'One ${size} ${crust} crust'
}