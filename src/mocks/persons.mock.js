const genders = { M: 'm', F: 'f' };

const persons = [{
  id: 1,
  firstName: 'Bruce',
  lastName: 'Lee',
  birthday: new Date('1973-07-20'),
  age: 32,
  gender: genders.M,
  img: '/img/bruce.png',
}, {
  id: 2,
  firstName: 'Arnold',
  lastName: 'Schwarzenegger',
  birthday: new Date('1947-07-30'),
  age: 72,
  gender: genders.M,
  img: '/img/arnold.jpg',
}, {
  id: 3,
  firstName: 'Jason',
  lastName: 'Statham',
  birthday: new Date('1967-07-26'),
  age: 51,
  gender: genders.M,
  img: '/img/jason.jpg',
}, {
  id: 4,
  firstName: 'The',
  lastName: 'Aladdin',
  birthday: new Date('1200-01-15'),
  age: 20,
  gender: genders.M,
  img: '/img/aladdin.png',
}, {
  id: 5,
  firstName: 'Princess',
  lastName: 'Jasmine',
  birthday: new Date('1196-11-18'),
  age: 19,
  gender: genders.F,
  img: '/img/jasmine.png',
}, {
  id: 6,
  firstName: 'The',
  lastName: 'Genie',
  birthday: new Date('1000-01-01'),
  age: 1000,
  gender: genders.M,
  img: '/img/genie.png',
}, {
  id: 7,
  firstName: 'The',
  lastName: 'Abu',
  birthday: new Date('1221-14-21'),
  age: 8,
  gender: genders.F,
  img: '/img/abu.png',
}];

module.exports = { genders, persons };
