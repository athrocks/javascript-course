// for loop
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// while loop
let num = 18
while (num > 10) {
    console.log(num--);
}

// do while loop
let num2 = -6;
do {
    console.log(num2)
} while (num2 > 18);

// for-of loop
let str = "Atharva";
for (let char of str) {
    console.log(char);
}

// for-in loop
let student = {
    fullName : "Atharva",
    lastName : "Pardeshi",
    age : 21,
    isPass : true,
    cgpa : 8.87
};

for (let key in student) {
    console.log("key:",key, "value:", student[key]);
}