// Conditional Statements

let nationality = "Indian";
let age = 19;

if (nationality == "Indian" && age > 18) {
  console.log(true);
} else {
  console.log(false);
}

if (age < 18) {
  console.log("junior");
} else if (age > 60) {
  console.log("senior");
} else {
  console.log("middle");
}

// Ternery Operator
age = 10;
let ans = age > 18 ? "adult" : "not adult";
console.log(ans);