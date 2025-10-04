// const : which is use for final variable declaration 
//  which is immutable - we can't change it value after declaration 

const book_price = 150
console.log("book price : "+book_price);

//book_price = 160 // run time exception  - re-updation not allowed 
//console.log("new book price : "+book_price);


// const book_price = 450 - re declaration is not possible 

// but if we are using const with array or object we can change it  inside the value after 
///declaration

const student = {"name":"nikhil","score":89}
console.log(student);

student.name = "Om"
console.log(student);


student["age"] = 78
console.log(student);

