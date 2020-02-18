const score=[20,15,25,30,5,10];
const filterscores=score.filter(score=>score>20);
console.log(filterscores);

const users=[
    {name:"John",premium:true},
    {name:"Marry",premium:false},
    { name:"Smith",premium:true},
    { name:"snow",premium:false
    }
]

let filterUsers=users.filter(users=>users.premium);
console.log(filterUsers)