"use strict";

/*
const shoppingList = [ 
    {
        name: "Grapes",
        price: 3.00
    },

    {
        name: "Oranges",
        price: 2.00
    },

    {
        name: "Cantelope",
        price: 1.50
    },

    {   name: "Lettuce",
        price: 2.50
    },

    {
        name: "Green Peppers",
        price: .85
    },

    {
        name: "Squash",
        price: .90
    },

    {
        name: "Bread",
        price: 2.50
    },

    {
        name: "Guac",
        price: 4.50
    }


];
for (let i = 0; i > shoppingList.length; i++) {
    console.log(`Name: ${shoppingList[i].name}` | `Price: ${shoppingList[i].price}` );

}

let total = 0;
shoppingList.forEach ((shoppingList) => {
    total += shoppingList.price;

});
    console.log (`The total is: ${total}`);

shoppingList.forEach ((price) => {
    console.log(price);
});

class shoppingList {
    constructor (name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

}

*/

const itemList = [];
function addItem (name, price, qty) {
    itemList.push(new itemList(name,price,qty));

}

addItem ("cheese", 10, 1);

function removeItem(name) {
    itemList.splice(itemList.indexOf(name, 1));
}



   // for (let i = 0; i < itemList.length; i++) {
        //if (name === itemList[i].name ) {
            //itemList.splice(i, 1);
        //}

    //}

//}

console.log(itemList);