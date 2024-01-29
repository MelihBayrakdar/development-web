// write a recursive function that adds all numbers in a given range (1/10 points)

// function sumRange(start: number, end: number): number {
//   if (start === end) {
//     return start;
//   }
//   return start + sumRange(start + 1, end);
// }

// console.log(sumRange(1, 10));

// write a function that adds all the numbers in an array (1/10 points)

// function sumArray(arr: number[]): number {
//   if (arr.length === 0) {
//     return 0;
//   }
//   return arr[0] + sumArray(arr.slice(1));
// }

// console.log(sumArray([1, 2, 3, 4, 5]));

// write a function that converts a Student object to a Person object (define all relevant types) (1/10 points)

// type Person = {
//   name: string;
//   age: number;
//   birthDate: Date;
// };

// type Student = Person & {
//   id: number;
// };

// function convertStudentToPerson(student: Student): Person {
//   return {
//     name: student.name,
//     age: student.age,
//     birthDate: student.birthDate,
//   };
// }

// write a function that groups an `Immutable.List` of Person into an Immutable.Map by Age (2/10 points)

import { List, Map } from 'immutable';

// type Person = {
//   name: string;
//   age: number;
//   birthDate: Date;
// };

// const people: List<Person> = List([
//   {
//     name: 'John',
//     age: 20,
//     birthDate: new Date('1999-01-01'),
//   },
//   {
//     name: 'Jane',
//     age: 19,
//     birthDate: new Date('1999-01-01'),
//   },
//   {
//     name: 'Bob',
//     age: 21,
//     birthDate: new Date('1998-01-01'),
//   },
// ]);

// function groupByAge(people: List<Person>): Map<number, List<Person>> {
//   return Map<number, List<Person>>(people.groupBy((person) => person?.age));
// }

// console.log(groupByAge(people).toJS());

// write a function that filters an `Immutable.List` of Person by `Age >= 18` (1/10 points)

// import { List, Map } from 'immutable';

// type Person = {
//   name: string;
//   age: number;
//   birthDate: Date;
// };

// const people: List<Person> = List([
//   {
//     name: 'John',
//     age: 20,
//     birthDate: new Date('1999-01-01'),
//   },
//   {
//     name: 'Jane',
//     age: 17,
//     birthDate: new Date('1999-01-01'),
//   },
//   {
//     name: 'Bob',
//     age: 21,
//     birthDate: new Date('1998-01-01'),
//   },
// ]);

// function filterByAge(people: List<Person>): List<Person> {
//   return people.filter((person) => person?.age >= 18);
// }

// console.log(filterByAge(people).toJS());

// write a function that transforms an `Immutable.List` of Person into an `Immutable.List` of their age with `map` (1/10 points)

// import { List, Map } from 'immutable';

// type Person = {
//   name: string;
//   age: number;
//   birthDate: Date;
// };

// const people: List<Person> = List([
//   {
//     name: 'John',
//     age: 20,
//     birthDate: new Date('1999-01-01'),
//   },
//   {
//     name: 'Jane',
//     age: 17,
//     birthDate: new Date('1999-01-01'),
//   },
//   {
//     name: 'Bob',
//     age: 21,
//     birthDate: new Date('1998-01-01'),
//   },
// ]);

// function mapAge(people: List<Person>): List<number> {
//   return people.map((person) => person?.age);
// }

// console.log(mapAge(people).toJS());
