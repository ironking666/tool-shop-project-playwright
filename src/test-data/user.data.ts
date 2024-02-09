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
export const paymentsData = {
  randomGiftCardNumber: faker.datatype.number({ min: 1111, max: 9999 }),
  randomValidationCode: faker.datatype.number({ min: 100, max: 999 }),
  randomBankName: faker.finance.accountName(),
  randomAccountNumber: faker.finance.accountNumber(),
};
