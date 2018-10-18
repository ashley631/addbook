"use strict";

class Person {
    constructor (name) {

        this.name = name;
    }

    eat() {
        console.log("Nom, Nom, Nom");
    }
    speak () {
        console.log("<Person.name> says hello!");
    }

}

class Student extends Person {
    constructor (name) {
        super();
        this.name = name;
    }

    speak () {
        console.log("A friendly student named <Student.name> says hello! ");
    }
}
