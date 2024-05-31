const num=require("readline").createInterface({

    input:process.stdin,
    output:process.stdout
});
   var a;
   var b;
   var area=1;


    num.question("Enter the breath :",(a)=>{
    num.question("Enter the legth:",(b)=>{
        var num1=parseInt(a);
        var num2=parseInt(b);
        const avg=num1* num2
        console.log("Average of two number:"+avg)  ;    
        num.close();
    });
});