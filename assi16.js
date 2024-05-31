const num=require("readline").createInterface({

    input:process.stdin,
    output:process.stdout
});
   var a;
   var b;
   var avg=1;


    num.question("Enter the first number:",(a)=>{
    num.question("Enter the second number :",(b)=>{
        var num1=parseInt(a);
        var num2=parseInt(b);
        const avg=(num1+ num2)/2;
        console.log("area of two number:"+avg)  ;    
        num.close();
    });
    });
    





