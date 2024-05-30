const num=require("readline").createInterface({

    input:process.stdin,
    output:process.stdout,
});

    num.queion("Enter first number:",(a)=>{
    num.question("Enter second number",(b)=>{
    const num1=parseFloat(a);
    const num2=parseFloat(b);
    console.log("Insalisation number num1=",num1,",num2=",num2);

    console.log("Camparison Operaters:");
    console.log("num1==num2",num1==num2);
    console.log("num1!=num2",num1!=num2);
    console.log("num1===num2",num1===num2);
    console.log("num1!==num2",num1!==num2);
    console.log("num1<num2",num1<num2);
    console.log("num1>num2",num1>num2);
    console.log("num1<=num2",num1<=num2);
    console.log("num1>=num2",num1>=num2);
    num.close(); 
    })
    })