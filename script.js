/*
Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 232500, Dwapar. Write a function which takes two objects and return the person with more power.
*/

let ramaObject ={
    name : 'Ram',
    power : '2500',
    yuga : 'Treta'
}

let krishnaObject ={
    name : 'Krishna',
    power : '232500',
    yuga :'Dwapar'
}

const powerValidator =(object1, object2) =>{
    return (object1.power > object2.power ? object1.name : object2.name )
}

console.log(powerValidator(ramaObject, krishnaObject))