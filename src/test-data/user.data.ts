import { faker } from '@faker-js/faker';

export const testUser = {
  userEmail: 'customer@practicesoftwaretesting.com',
  userPassword: 'welcome01',
};

export const randomUserData = {
  randomUserEmail: faker.internet.email(),
  randomUserPassword: faker.internet.password(),
};
