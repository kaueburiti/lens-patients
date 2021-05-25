import faker from "faker";

export type Patients = {
  id: string;
  lastName: string;
  homePhone: string;
  workPhone: string;
  firstName: string;
  middleName: string;
  pictureUrl: string;
  dateOfBirth: string;
  mobilePhone: string;
};

export const generateGenderlessFakeContent = () => ({
  id: `MT00${faker.random.number({ min: 10, max: 99 })}`,
  homePhone: faker.phone.phoneNumber("###-###-####"),
  lastName: faker.name.lastName(),
  middleName: faker.name.middleName(),
  mobilePhone: faker.phone.phoneNumber("###-###-####"),
  workPhone: faker.phone.phoneNumber("###-###-####"),
  dateOfBirth: "1940-06-12T00:00:00",
});

export const PATIENTS: Patients[] = [
  {
    firstName: faker.name.firstName(1),
    pictureUrl:
      "https://i.pinimg.com/originals/f1/5c/21/f15c21d2e4e1db44f570d2ca02ee2987.jpg",
    ...generateGenderlessFakeContent(),
  },
  {
    firstName: faker.name.firstName(0),
    pictureUrl:
      "https://i.pinimg.com/474x/0c/c8/ee/0cc8ee038a6b5975fbd08ff89fff371a.jpg",
    ...generateGenderlessFakeContent(),
  },
  {
    firstName: faker.name.firstName(0),
    pictureUrl:
      "https://i.pinimg.com/564x/81/fc/eb/81fceb145241de5647328d518a109186.jpg",
    ...generateGenderlessFakeContent(),
  },
  {
    firstName: faker.name.firstName(1),
    pictureUrl:
      "https://i.pinimg.com/564x/c3/99/23/c39923ee12d4eb3be561f15b3e2cef26.jpg",
    ...generateGenderlessFakeContent(),
  },
  {
    firstName: faker.name.firstName(1),
    pictureUrl:
      "https://i.pinimg.com/564x/4f/10/a6/4f10a61cc43143442344fd916a0ea5b1.jpg",
    ...generateGenderlessFakeContent(),
  },
  {
    firstName: faker.name.firstName(0),
    pictureUrl:
      "https://i.pinimg.com/564x/ee/0a/71/ee0a715c8dd1e359d5e524e3313aaa59.jpg",
    ...generateGenderlessFakeContent(),
  },
];
