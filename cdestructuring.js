const student = {
  name: "Joe Blow",
  age: 25,
  country: "Canada",
};

const { name, age } = student;

console.log(name);
console.log(age);

//This is for the way it was mentioned on the dropbox.
console.log(`Hello! My name is ${name} and I am ${age} years old.`);

/*
 * Expected output:
 * Joe Blow
 * 25
 */
