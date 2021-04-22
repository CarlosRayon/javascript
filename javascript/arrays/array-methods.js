/* https://dev.to/devmount/javascript-array-methods-explained-with-emojis-2amn*/

/* Array.push()*/
let livestock = ['🐷', '🐮', '🐔'];
livestock.push('🐴', '🐮');
// console.log(livestock);
// ["🐷", "🐮", "🐔", "🐴", "🐮"]

/* Array.from()*/
const wild = '🐻🐯🦁';
const tamed = Array.from(wild);
// console.log(tamed);
// ["🐻", "🐯", "🦁"]

/*Array.concat()*/
const dogs = ['🐶', '🐶'];
const cats = ['🐱', '🐱', '🐱'];
const pets = dogs.concat(cats);
// console.log(pets);
// ["🐶", "🐶", "🐱", "🐱", "🐱"]

/* Array.every() */
const visitors = ['🧑', '👽', '🧑', '🧑', '🤖'];
const isHuman = (e) => e === '🧑';
const onlyHumans = visitors.every(isHuman);
// console.log(onlyHumans);
// false

/* Array.fill() */
let seeds = ['🌱', '🌱', '🌱', '🌱', '🌱'];
seeds.fill('🌳', 1, 4);
// console.log(seeds);
// ["🌱", "🌳", "🌳", "🌳", "🌱"]

/* Array.filter()*/
const guests = ['👩👨', '👩👩', '👨', '👩', '👨👨'];
const singles = guests.filter((g) => g.length / 2 === 1); // *
// console.log(singles);
// ["👨", "👩"]

/* Array.flat()*/
const savings = ['💵', ['💵', '💵'], ['💵', '💵'], [[['💰']]]];
const loot = savings.flat(3);
// console.log(loot);
// ["💵", "💵", "💵", "💵", "💵", "💰"];

/* Array.includes()*/
const food = ['🥦', '🥬', '🍅', '🥒', '🍩', '🥕'];
const caught = food.includes('🍩');
// console.log(caught);
// true

/* Array.join()*/
const devices = ['💻', '🖥️', '🖥️', '💻', '🖨️'];
const network = devices.join('〰️');
// console.log(network);
// "💻〰️🖥️〰️🖥️〰️💻〰️🖨️"

/* Array.map()*/
const hungryMonkeys = ['🐒', '🦍', '🦧'];
const feededMonkeys = hungryMonkeys.map((m) => m + '🍌');
// console.log(feededMonkeys);
// ["🐒🍌", "🦍🍌", "🦧🍌"]

/* Array.reverse()*/
let rabbitWins = ['🐇', '🦔'];
const hedgehogWins = rabbitWins.reverse();
// console.log(hedgehogWins);
// ["🦔", "🐇"]

/* Array.slice()*/
const solutionsOfClassmates = ['📃', '📑', '📄', '📝'];
const myOwnSolutionReally = solutionsOfClassmates.slice(2, 3);
// console.log(myOwnSolutionReally);
// ["📄"]

/* Array.some()*/
const participants = ['🔇', '🔇', '🔊', '🔇', '🔊'];
const isLoud = (p) => p === '🔊';
const troubles = participants.some(isLoud);
// console.log(troubles);
// true

/*Array.sort()*/
let books = ['📕', '📗', '📕', '📒', '📗', '📒'];
books.sort();
// console.log(books);
// ["📒", "📒", "📕", "📕", "📗", "📗"]

/* Array.splice()*/
let weather = ['☁️', '🌧️', '☁️'];
weather.splice(1, 2, '☀️');
// console.log(weather);
// ["☁️", "☀️"]

/* Array.unshift()*/
let train = ['🚃', '🚃', '🚃', '🚃'];
train.unshift('🚂');
// console.log(train);
// ["🚂", "🚃", "🚃", "🚃", "🚃"]
