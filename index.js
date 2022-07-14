// const prompt = require("prompt-sync")({ sigint: true });

class CoffeeShop {
	constructor(name, menu) {
		this.name = name;
		this.menu = menu;
		this.orders = [];
	}

	// The function below loop's through menu array and if the name of item is equal to the name in array, function adds this item to orders array. Counter is incremented by 1.

	addOrder(name) {
		let counter = 0;
		for (let element of this.menu) {
			if (name == element.item) {
				this.orders.push(name);
				counter++;
			}
		}
		if (counter > 0) {
			console.log(`Order of ${name} has been taken succesfully.`);
		} else {
			console.log(`\n` + `\x1b[31m%s\x1b[0m`, `Sorry, we don't have it on the menu.`);
		}
	}

	// Here function checks if the orders array has any elements in it. If it does it logs The ${this.orders[0]} is ready! . If it doesn't it logs "All orders have been fulfilled!".

	fullFillOrder() {
		if (this.orders.length > 0) {
			console.log(`The ${this.orders[0]} is ready!`);
			this.orders.shift();
		} else {
			console.log("\x1b[35m",`All orders have been fulfilled!`);
		}
	}

	// Function below creates new array called orders. It adds orders by order in array.

	listOrders() {
		console.log(`Still opened orders:`);
		this.orders.forEach((element) => {
			console.log("\x1b[33m", `- ${element}`);
		});
	}

	// Function iterates through orders and menu array and if the order item is same as menu item the due amount is incremented by price of menu item.

	dueAmount() {
		let due = 0;
		for (let itemA of this.orders) {
			for (let itemB of this.menu) {
				if (itemA == itemB.item) due += itemB.price;
			}
		}
		console.log(`\x1b[31m%s\x1b[0m`, `Total amount due is: ${due}$`);
	}

	// This function creates a new array and converts it to a string from the menu object and sorts it by price from lowest to highest and converts it to a string .

	cheapestItem() {
		let cheapest = this.menu.sort((a, b) => a.price - b.price);
		console.log(
			`The cheapest item on the menu is ${cheapest[0].item} and it costs ${cheapest[0].price}$`
		);
	}

	//This function does the same as previous but in reversed order from highest to lowest prices.
	mostExpensiveItem() {
		let cheapest = this.menu.sort((a, b) => b.price - a.price);
		console.log(
			`The most expensive item on the menu is ${cheapest[0].item} and it costs ${cheapest[0].price}$`
		);
	}

	// 

	drinksOnly() {
		let drinks = [];
		for (let item of this.menu) {
			if (item.type == "drink") {
				drinks.push(item.item);
			}
		}
		console.log(`Drinks on the menu: ${drinks}`);
	}

	// Function does the same as previous but for food items.
	foodOnly() {
		let foodies = [];
		for (let item of this.menu) {
			if (item.type === "food") {
				foodies.push(item.item);
			}
		}
		console.log(`Foods on the menu: ${foodies}`);
	}
}

let menu = [
	{ item: "coffee", type: "drink", price: 5 },
	{ item: "tea", type: "drink", price: 4 },
	{ item: "beer", type: "drink", price: 5 },
	{ item: "pizza", type: "food", price: 7 },
	{ item: "sandwich", type: "food", price: 10 },
	{ item: "eggs", type: "food", price: 12 },
];

let ordersShop = new CoffeeShop("CoffeeShop", menu);

// ordersShop.addOrder();
ordersShop.addOrder("coffee");
ordersShop.addOrder("tea");
ordersShop.addOrder("beer");
ordersShop.addOrder("sandwich");
ordersShop.addOrder("pizza");
ordersShop.addOrder("eggs");

ordersShop.fullFillOrder();
ordersShop.fullFillOrder();
ordersShop.fullFillOrder();
ordersShop.fullFillOrder();
ordersShop.fullFillOrder();
// ordersShop.fullFillOrder();
// ordersShop.fullFillOrder();

ordersShop.listOrders();

ordersShop.dueAmount();

ordersShop.cheapestItem();

ordersShop.mostExpensiveItem();

ordersShop.drinksOnly();

ordersShop.foodOnly();
