//Array in javascript 
const laptop = [
    "HP", "Acer", "MacBook", "Asus", "Samsung"
];

console.log(laptop[2]);

const smartphone = new Array(
    "Samsung", "Apple", "Xiaomi", "Oppo", "Vivo"
)

console.log(smartphone[1] + `\n` + smartphone[0]);

const mineralWater = new Array(
    "Aqua", "LeMinerale", "Fiji", "Ades"
)

let drinkWater = mineralWater[3];
console.log(`i drink mineral water ${drinkWater}`);

const orangIndo = {
    nama: "Abdul",
    kelas: 11,
    umur: 21
}

console.log(`Orang nya ${orangIndo.nama}`);

let myArray = [];
myArray.push(Date.now());
console.log(myArray);

// array function
function myFunction(){
    let fungsi = new Array("Halo masbro", "Pagi mas");
    return;
}

let ArrayGw = [Date.now()];
ArrayGw[1] = myFunction;
console.log(ArrayGw[1]);

