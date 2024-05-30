const r0=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,c

});
r0.question("Who are you:",(name)=>{
r0.question("House name:",(home)=>
{
    console.log("Hey there "+name+"!");
    console.log("The house name "+home+"!");
    r0.close();


});
});