let favrecipe={
    title:"Sandwich",
    serves:3,
    Ingredients:["Bread","Cheese","Turkey"],
    
};

console.log( `title:${favrecipe.title}
 serves:${favrecipe.serves}`);
    console.log(`Ingredients:`)
    favrecipe.Ingredients.forEach(rec=>{
     console.log(`${rec}`)});
        
                    
         