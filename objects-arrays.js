"use strict";


/*const students = ["Gabriel", "Dakota", "Matt", "Lauren", "Steve"]
    console.log (students);
    students.sort();
    console.log (students);/*





//i needs to be less than things.length so you can add more values to the array.
//const things = ["zero", "one", "two", "three"];
//for (let i =0; i < things.length; i++); {
    //console.log (things[i]);
//}

/*let betsy = {
    name: "Betsy" ,
    age: 32,
    height: `6'4"`,
    hairColor: "Brown",
    eyeColor: "Brown"
};

console.log (betsy.age);

const students = [
    { 
        name: "Hart",
        age:  23,
        favColor: "blue",
        playFrisbee () {    
            console.log("Playing frisbee is so fun.");
            console.log(`${this.name} is playing frisbee.`);

        },
        birthday() {
            this.age++;
            return this.age;
        }


    },

    {
        name: "Aaron",
        age: 32,
        favColor: "electric blue"

    },

    {
        name: "Rachel",
        age: 32,
        favColor: "Black"

    },


];
    console.log ([students]);

    console.log (students[2].favColor);

//can use while, for, for of, for in, forEach, do while loops
//*** reccomended loops: for and for of ***

//for loop to iterate over array - Checking values
for (let i =0; i < students.length; i++) {
    //(students[i.favTeacher="Adam"])
    console.log (students[i]);
}

//for of loop to iterate over array - Checking values
//this is for accessing the direct value of each index
for (let student of students)  {
    console.log(student);
}


// for in loop to iterate over array - Checking properties
// shows index number
for (let student in students)  {
    console.log(student);
}

// for in loop to iterate over an object - Checking properties
// shows properties for object
for (let prop in students[0])  {
    console.log(prop);
    if (prop=== "age")
        console.log ("You have an age");
}

// forEach loop to iterate over an array 
students.forEach ((student) => {
    console.log(student);
});

const logStudent = (student) => {
    console.log(student);

};
students.forEach(logStudent);
*/




/*class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.knowledge = 0;
    }
    study () {
        this.knowledge ++;

    }

    party () {
        this.knowledge -= 2;
    }

 
}
class frontEnd extends Student {
    constructor (name, age, faveFood) {
        super ();
        this.name = name;
        this.age = age;
        this.faveFood = faveFood;
        this.knowledge = 10;
        this.superCool = true;
        this.laptop = true;

    }

    learnJavaScript () {
        this.knowledge += 20;
    }

    becomeAdam () {
        this.faveFood = "Tiramisu";
    }

    party () {
        this.knowledge += 5;
    }

}
    let aaron = new frontEnd ("Aaron", 32, "tacos");
    console.log(aaron);


    let tSwift = new Student("Taylor Swift", 30);
    console.log(tSwift);
    tSwift.study ();
    console.log (tSwift);

    tSwift.study ();
    tSwift.party ();
    tSwift.party ();
    console.log(tSwift);

    let carly = new Student ("Carly", 27);
    console.log(carly);*/

    let newArray = new Array ();
    console.log(newArray.length);
    console.log(newArray.pop);
    console.log(newArray.hasOwnProperty("pop"));
    console.log(newArray);

    const str = "hello";
    console.log(str.hasOwnProperty("split"));
    console.log(str.prototype);


    




    






















