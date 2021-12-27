// У нас есть массив объектов, представляющих разных людей в наших списках контактов.

//Для вас заранее написана lookUpProfileфункция, которая принимает name и свойство ( prop) в качестве аргументов.

//Функция должна проверять, name является ли фактический контакт, firstName и данное свойство ( prop) является свойством этого контакта.

//Если оба верны, то верните «значение» этого свойства.

//Если name не соответствует ни одному контакту, вернуть строку No such contact.

//Если prop не соответствует ни одному действительному свойству контакта, найденного для сопоставления, nameверните строку No such property.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(firstName, prop) {
  var result;
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else return "No such property";
    }
  }
  if (result === undefined) return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
