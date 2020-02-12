function calculation(birthage){
    return 2020-birthage;
}
let Johnage=calculation(1990);
let Mikeage=calculation(1998);
console.log(Johnage);
console.log(Mikeage);

function Retireage(name,age){
    let retireage=calculation(age);
    console.log(`${name} will retire in ${retireage} year`)
}
Retireage("Johnage",1990);
Retireage("Mikeage",1998);
