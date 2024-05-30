
  const num=require("readline").createInterface({

    input:process.stdin,
    output:process.stdout,
});  num.question("Enter the number:",(input)=>{
    let number=parseFloat(input);

    console.log("Intial number:",number);

    console.log("number++:",number);
    console.log("After post increment value",++number);
    console.log("Pre decrement",--number);

    num.close();



});
