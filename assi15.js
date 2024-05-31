const num=require("readline").createInterface({

    input:process.stdin,
    output:process.stdout
});
    num.question("String:",(string)=>{
    num.question("Integer :",(Integer)=>{
    console.log("You enter the string: "+string+"!");
   console.log("You enter the integer: "+Integer+"!");
    num.close();
    });
    });
    
    


