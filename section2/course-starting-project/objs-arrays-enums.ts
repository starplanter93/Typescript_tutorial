// const person: {
//   name: string;
//   age: number;
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "jks",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "jks",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [];
// console.log(person.role);

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
  // console.log(hobby.map());
}

if (person.role === Role.AUTHOR) {
  console.log(Role.AUTHOR);
}
