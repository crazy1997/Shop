const inputval = document.querySelector('#text-find');
const search = document.querySelector('.label');

const cards = document.querySelector('.main');

let arr = cards.childNodes;

let arr1 = arr[1];
let arr3 = arr[3];
let arr5 = arr[5];
let arr7 = arr[7];
let arr9 = arr[9];
let arr11 = arr[11];
let arr13 = arr[13];
let arr15 = arr[15];
let arr17 = arr[17];

const element = [arr1,arr3,arr5,arr7,arr9,arr11,arr13,arr15,arr17];

game0 = element[0].firstChild.nextSibling.innerHTML
game1 = element[1].firstChild.nextSibling.innerHTML
game2 = element[2].firstChild.nextSibling.innerHTML
game3 = element[3].firstChild.nextSibling.innerHTML
game4 = element[4].firstChild.nextSibling.innerHTML
game5 = element[5].firstChild.nextSibling.innerHTML
game6 = element[6].firstChild.nextSibling.innerHTML
game7 = element[7].firstChild.nextSibling.innerHTML
game8 = element[8].firstChild.nextSibling.innerHTML

const GameArr = [game0,game1,game2,game3,game4,game5.game6,game7,game8]

GameArr.forEach((el))

console.log(GameArr);
