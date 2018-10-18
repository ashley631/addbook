"use strict";


class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("Andrew", "drwb333@gmail.com", "(989) 721-0902", "Boy"),
            new Contact("Ashley", "wino@gmail.com", "(989) 721-8321", "Girl"),
        ];
    }

    add(info) {
        this.contacts.push(info);
        console.log(this.contacts);
    }

    delete(numContact) {
        let contactName = this.contacts[numContact].name;
        this.contacts.splice(numContact, 1);

        console.log(`${contactName} has been deleted`);
    }

    print() {
        if (this.contacts.length === 0) {
            console.log("There are no contacts");
        }
        else {
            for (let contact of this.contacts) {
                console.log(contact);
            }
        }
    }

}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

function launchAddressBook(addressBook) {
    let choice = "";

    while (choice !== "quit"  && choice != null) {
        choice = prompt("Would you like to add, print, delete, or quit?");
    
        if (choice === "add") {
            let name = prompt("Enter a name");
            let email = prompt("Enter an email");
            let phone = prompt("Enter a phone number");
            let relation = prompt("Enter a relation");
    
            addressBook.add(new Contact(name, email, phone, relation));
        } else if (choice === "print") {
            addressBook.print();
        } else if (choice === "delete") {
            addressBook.print();
            let numContact = prompt("What do you want to delete?");
            addressBook.delete(numContact);
        } else {
            console.log(`Invalid choice [${choice}]`);
        }
    }

    console.log("GAME OVER");
}

launchAddressBook(new AddressBook());
