let jbmi,mbmi;
let john={
    name:"John",
    weight:200,
    height:4.5,
    BMI(){
         jbmi=Math.ceil(this.weight/this.height**2);
            console.log(`John's BMI is ${jbmi}`);
    }
}
let mike={
    name:"Mike",
    weight:120,
    height:5.2,
    BMI(){ 
         mbmi=Math.ceil(this.weight/this.height**2);
    console.log(`Mike's BMI is ${mbmi}`);
    }
}
john.BMI();
mike.BMI();

if(jbmi>mbmi){
    
    console.log(`John's BMI is highest ${jbmi}`);
}else{
    
    console.log(`Mike's BMI is highest ${mbmi}`);
}

