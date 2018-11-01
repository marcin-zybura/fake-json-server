let faker = require('faker');

let generateEmployees = () => {
  let employees = []

  for (let id = 0; id < 50; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    employees.push({
      "id": id,
      "firstName": firstName,
      "lastName": lastName,
      "email": email
    });
  }

  return { "employees": employees };
}

module.exports = generateEmployees;