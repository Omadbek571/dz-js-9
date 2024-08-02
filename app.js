// forEach metodiga oid masalalar
// 1-savol

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(value) {
//     let natija = value * 2;
//     console.log(natija);
// })

// 2-savol

// let arr = ["salom", "nima", "gaplar"]

// arr.forEach(function (value) {
//     let natija = value.toUpperCase()
//     console.log(natija);
// })

// 3-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.forEach(function (value) {
//     let natija = value += 5
//     console.log(natija);
// })

// 4-savol

// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78}
//   ];

// students.forEach(function (value) {
//     console.log(`${value.name} : ${value.grade}`);
// })

// Map metodiga oid masalalar

// 1-savol

// let arr = [1, 2, 3, 4, 5]

// let res = arr.map(function (value) {
//     console.log(value * 2);
// })

// 2-savol

// let arr = ["salom", "nima", "gap"]

// let res = arr.map(function (value) {
//     let natija = value.toUpperCase()
//     console.log(natija);
// })

// 3-savol

// let arr = [1,2,3,4,5]

// let res = arr.map(function (value) {
//     let natija = value += 5
//     console.log(natija);
// })


// 4-savol

// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78}
//   ];

// let res = students.map(function (value) {
//     let natija = (`${value.name} : ${value.grade += 10}`)

//     console.log(natija);
// })

// filter metodiga oid masalalar

// 1-savol

// const numbers = [1, 2, 3, 4, 5, 6];

// let res = numbers.filter(function (value) {
//     return value % 2 == 0
// })

// console.log(res);

// 2-savol

// const words = ['apple', 'banana', 'cherry', 'date'];

// let res = words.filter(function (value) {
//     return value.length > 5
// })

// console.log(res);


// 3-savol

// const ages = [12, 17, 18, 19, 21];

// let res = ages.filter(function (value) {
//     return value > 18
// })

// console.log(res);


// 4-savol

// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 72},
//     {name: 'Hasan', grade: 90},
//     {name: 'Olim', grade: 77}
//   ];

// let res = students.filter(function (value) {
//     return value.grade > 80
// })

// console.log(res);

// find metodiga oid masalalar


// 1-savol

// const numbers = [4, 9, 11, 2, 18];

// let res = numbers.find(numbers => numbers > 10) 

// console.log(res);


// 2-savol

// const students = [
//     { name: 'Ali', grade: 80 },
//     { name: 'Vali', grade: 90 },
//     { name: 'Hasan', grade: 78 },
//     { name: 'Olim', grade: 85 }
// ];

// let res = students.find(students => students.grade > 85)

// console.log(res);


// some/every metodiga oid masalalar


// 1-savol

// const numbers = [-1, -2, 3, -4];

// let res = numbers.some(function (value) {
//     return value > 0
// })

// console.log(res);


// 2-savol

// const words = ['cat', 'dog', 'elephant'];

// let res = words.some(function (value) {
//     let natija = value.length > 5
//     console.log(natija);

// })

// 3-savol

// const numbers = [1, 2, 3, 4];

// let res = numbers.every(function (value) {
//     return value > 0
// })

// console.log(res);



// 4-savol

// const students = [
//     { name: 'Ali', grade: 60 },
//     { name: 'Vali', grade: 70 },
//     { name: 'Hasan', grade: 80 }
// ];

// let res = students.every(function (value) {
//     let natija = value.grade > 50

//     return natija
// })

// console.log(res);


