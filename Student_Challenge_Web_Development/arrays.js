let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
// delete iceCreamFlavors[iceCreamFlavors.length-1]
console.log(iceCreamFlavors[length-1]  = "Mango") 
iceCreamFlavors.splice(2,1);
console.log(iceCreamFlavors);
console.log("")

console.log("For_Loops")
for (let a = 0; a < iceCreamFlavors.length; a++) {
  console.log(iceCreamFlavors[a]);
} 
console.log("")

console.log("For_Loops")
for (let i = 0; i < 10; i++) {
    console.log(i); 
  } 
console.log("");

console.log("While_Loops")
let x = 0;
while (x < 10) {
 console.log(x);
 x++;
}
console.log("")

console.log("Foreach_Loops")
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => console.log(`Number ${number} Index ${index}`));
console.log("")

console.log("For_Loops/w_Break")
let numbers2 = [1, 2, -1, 4, 5];
for(let i = 0; i< numbers2.length; i++) {
  if (numbers2[i] < 0) {
    break;
  }
  console.log(numbers2[i]);
}
console.log("")

let iceCreamFlavors2 = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
iceCreamFlavors2.find(flavor => flavor === "Chocolate") // "Chocolate"

let iceCreamFlavorss = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
iceCreamFlavorss.map(flavor => {
  flavor.price = 1;
  return flavor;
})

let sales = [{
  date : '2024-05-01',
  amount: 2
 },
 {
  date : '2024-05-01',
  amount: 1
 }
 ]

 let sum = 0;
for( let b =0; b < sales.length; b++) {
  sum += sales[b].amount; 
}
sales.reduce((acc, curr) => acc + curr.amount, 0);