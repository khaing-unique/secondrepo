let details=document.getElementById("details");
let name=document.getElementById("name");
let person={
    name:"Mg Mg",
    age:23,
    fathername:"U Ba",
    family:["Mya Mya","Kaung Kaung","Hla Hla"],
    todo:function(){
        console.log("After school, do homework!");
    }
};
name.innerText=`${person.name}`;
details.innerHTML=`
        <li>He is ${person.age} old!</li>
        <li>His father is${person.fathername}</li>
        <li>His family members are</li>`;
        person.family.forEach(member=>{
            details.innerHTML+=`<ul><li>${member}</li></ul>`;
        });