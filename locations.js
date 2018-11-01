let faker = require('faker');

let generateLocations = () => {
  let locations = []

  for (let id = 0; id < 50; id++) {
    let locationName = faker.company.companyName();

    let zipCode = faker.address.zipCode();
    let city = faker.address.city();
    let streetName = faker.address.streetName();
    let streetAddress = faker.address.streetAddress();
    let country = faker.address.country();
    let latitude = faker.address.latitude();
    let longitude = faker.address.longitude();

    locations.push({
      "id": id,
      "locationName": locationName,
      "zipCode": zipCode,
      "city": city,
      "streetName": streetName,
      "streetAddress": streetAddress,
      "country": country,
      "latitude": latitude,
      "longitude": longitude
    });
  }

  return { "locations": locations };
}

module.exports = generateLocations;