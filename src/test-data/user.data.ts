import { faker } from '@faker-js/faker';

export const testUser = {
  userEmail: 'customer@practicesoftwaretesting.com',
  userPassword: 'welcome01',
};

export const randomUserData = {
  randomUserName: faker.person.firstName(),
  randomUserLastName: faker.person.lastName(),
  dateOfBirth: '12121989',
  address: faker.location.street(),
  postcode: faker.location.zipCode(),
  city: faker.location.city(),
  state: faker.location.state(),
  phone: faker.phone.number().replace(/\D/g, ''),
  randomUserEmail: faker.internet.email(),
  randomUserPassword: faker.internet.password(),
};
