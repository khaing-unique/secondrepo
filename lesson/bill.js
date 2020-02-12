let total=0;

let bill=(price,tax,name)=>{
    for(let i=0;i<price.length;i++){
    total+=price[i]+(price[i]*tax);
    }
    console.log(`${name} cash is ${total}`);
}
var Johnbill=bill([100,300,100],0.02,"John");