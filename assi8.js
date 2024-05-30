const num=require("readline").createInterface({

    input:process.stdin,
    output:process.stdout,
})
var a;
var b;
var c;

num.question("Enter the value of a:",(a)=>{
num.question("Enter the value of b:",(b)=>{
num.question("Enter the value of c:",(c)=>{
    
    const num1=parseInt(a);
    const num2=parseInt(a);
    const num3=parseInt(a);

    
        
    console.log("Largest number:");
    if(num1<num2&&num3<num2){
    
        console.log("Largest number is num2:");
    }
    else if(num2<num1&&num3<num1){
        
        console.log("largest number is num1:",num2<num1&&num3<num1);
    }
    else{
        console.log("Largest number is num3:");
    }


    num.close();
 });
});
});
