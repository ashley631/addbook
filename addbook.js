"use strict";

let addressBook = document.getElementById(addressBook);
container.innerHTML="";


document.getElementById("firstName")
const firstName= document.getElementById("First Name").value;
const firstNameOutput=`<div>First Name: ${firstName}</div>`;
addressBook.innerHTML=firstNameOutput;

const display = display; () => {


class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("Andy", "drandy@.gmailcom", "", "Friend"),
            new Contact("Ashley", "ashley@gmail.com", "", "Coworker"),
        ];
    }

    add(info) {
        this.contacts.push(info);
        document.getElementById(addressBook);///tried to change console.log statement
        container.innerHTML="add";
    }

    delete(numContact) {
        let contactName = this.contacts[numContact].name;
        this.contacts.splice(numContact, 1); 
        console.log(`${contactName} has been deleted`);
        document.getElementById(addressBook);
    }

    print() {
        if (this.contacts.length === 0) {
            console.log("There are no contacts");
            document.getElementById(addressBook);
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
            document.getElementById(addressBook);
        }
    }
    

    console.log("Add another contact");
}

launchAddressBook(new AddressBook());
