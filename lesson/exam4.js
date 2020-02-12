
let book=[
   
   {title:"The Lord of the rings",
    author:"Tolkien",
    alreadyread:true,
    
},
    {title:"The hobbti",
    author:"John",
    alreadyread:false,

    },
];

for(let i=0; i<book.length;i++){
if(book[i].alreadyread==true){
    console.log(`${book[i].title} is already read`);
}else {
    console.log(`You will need to read ${book[i].title}`);
}

}
    
