import { fakerES as faker } from '@faker-js/faker';

export class UserRepository {
  get() {
    const user = {
      name: faker.person.firstName(),
      lastname: faker.person.lastName(),
      age: faker.string.numeric(),
      email: faker.internet.email(),
      nationality: faker.location.country(),
    };

    return user;
  }
}
