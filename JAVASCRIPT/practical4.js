let age = 45  // declaration 
console.log("your age is : "+age);

age = 50 // re-assign is possible or updation is possible 
console.log("your age is : "+age);

// it will throw an error for redeclaration 
// because let support block based variable declaration 
// let age = 20 

let name="Python"
{
    let name="java"
    console.log("inside the block "+name);
    // let name = "react"
}
console.log("outside the block "+name);

