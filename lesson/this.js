let mgmg={
    firstname:"Mg Mg",
    BirthAge:1999,
    address:"Yangon",
    weight:150,
    height:5.3,
    gender:"Male",
    marry:false,
    family:["U Ba","Daw Mya","Hla Hla"],
    getAge(){
        let age=2020 -this.BirthAge;
        console.log(age);
    },
    login(name){
        console.log(`${name} is logined now!`);
    },
    logout(){
        console.log(`${this.firstname} is logout`);
    },
    BMI(){
        let bmi=this.weight/this.height**2;
        console.log(`his BMI is ${bmi}`)
    }
}
mgmg.getAge();
mgmg.login("Mg Mg");
mgmg.logout();
mgmg.BMI();