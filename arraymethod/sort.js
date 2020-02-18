let name=['lufi','mora','mane','kane','salah'];
name.sort();
name.reverse();
console.log(name);

let score=[10,20,30,40,5,60,70];
score.sort((a,b)=>a-b);
console.log(score);

let players=[
    {name:"salah",score:100},
    {name:"mane",score:90},
    {name:"firmino",score:80},
    {name:"arnold",score:70}

]
score.sort((a,b)=>b-a);
console.log(players);