const num=require("readline").createInterface({

    input:process.stdin,
    output:process.stdout,
});
var a;
var b;

num.question("Enter the value"),(a)=>{
num.question("Enter the value of b:",(b)=>{
const sum=parseInt(a) + parseInt(b);
const mult=parseInt(a)*parseInt(b);
const sub=parseInt(a)-parseInt(b);
const div=parseInt(a)/parseInt(b);
const mod=parseInt(a)%parseInt(b);

console.log("Sum of two numbers:"+sum+"");
console.log("Multiplication value of two numbers:"+mult+"");
console.log("Subtractio values of two numbers:"+sub+"");
console.log("Divition values :"+div+"");
console.log("Reminer value of two numbers: "+mod+"");
num.close();
});
});
