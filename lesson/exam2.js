let JohnScore=[89,120,103];
    MikeScore=[116,94,123];

let Johnaverage=(89+120+103)/3;
    Mikeaverage=(116+94+123)/3;
    Maryaverage=(97+134+105)/3;
    

    if(Johnaverage>Mikeaverage && Johnaverage>Maryaverage){
        console.log(`John is winner and average score is ${Johnaverage}`);
    }
    else if(Mikeaverage>Johnaverage && Mikeaverage>Maryaverage){
        console.log(`Mike is winner and average score is ${Mikeaverage}`);
    }else if(Maryaverage>Johnaverage && Maryaverage>Mikeaverage){
        console.log(`Mary is winner and average score is ${Maryaverage}`)
    }else{
        console.log("scores are draw");
    }
    
    


