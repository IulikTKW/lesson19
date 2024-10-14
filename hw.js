// const arr = ['Alex', 'Victor', 'Artur'];

// const vocale = ['a', 'i', 'o', 'u', 'e'];

// const strVocale = arr.filter((str) => {
//     return vocale.some((vocala) => str[0].toLowerCase() === vocala);
// })

// const strVocale = arr.filter((str) => {
//     return vocale.includes(str[0].toLowerCase());
// })

// const strConsoane = arr.filter((str) => {
//     return !vocale.includes(str[0].toLowerCase());
// })

// const strConsoane = arr.filter((str) => {
//     return vocale.every((vocala) => str[0].toLowerCase() !== vocala);
// })

// const strConsoane = arr.filter((str) => {
//     return !vocale.includes(str[str.length - i].toLowerCase());
// })


// console.log(strConsoane)

// const arr = ['Alex', 'Victor', 'Artur'];

// const vocale = ['a', 'i', 'o', 'u', 'e'];

// const concatArr = (list1, list2, k) => {
//     if(list2.length < k) return 'k is too high';

//     const copy1 = [...list1]
//     const copy2 = [...list2]

//     for(let i = 0; i < k ;i++) {
//         copy1.push(copy2[i])
//     }

//     return copy1;
// }

// console.log(concatArr(arr, vocale, 5))

// const users = [
//     {
//         name: 'test',
//         age: 18
//     },
//     {
//         name: 'test',
//         age: 25
//     },
//     {
//         name: 'test',
//         age: 33
//     },
//     {
//         name: 'test',
//         age: 32
//     },
//     {
//         name: 'test',
//         age: 60
//     },
// ]

// console.log(users.filter(item => item.age < 41 && item.age > 19))

// const arr = ['1', '2', '3'];

// const showItems = (list, order) => {
//     for (let i = 0; i < list.length; i++) {
//         const index = order === 'ASC' ? i : list.length - i - 1
//         console.log(list[index])
//     }


// }

// showItems(arr, 'ASC')
// showItems(arr, 'DSC')

const list = [1, 2, 3, 4]
const obj = { name: 'Alex', age: 18 }

const [test, , test1] = [...list]
const { name, age } = obj

