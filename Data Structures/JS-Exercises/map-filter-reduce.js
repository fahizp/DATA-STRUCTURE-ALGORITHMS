let test = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

let result = test.map((x) => {
  let total = 0;
  return (obj = {
    name: x.name,
    dob: x.dob,
    total: x.biology + x.chemistry,
  });
});

result.sort((a,b) => {
  if (a.total > b.total){
    return -1;
  } 
   if (a.total < b.total){
    return 1;
   }
   
    if (a.dob < b.dob){
      return 1 
    } else return -1;
})

let player = test.filter((x) => {
  return (x.name == "Leo Messi")
})

// console.log(player);


const b = {
  name : "adarsh"
}

b.name = "Hello World"


function reverse(x){
  var split = x.split("")
  var rev = split.reverse();
  var join = rev.join("")
  console.log(join)
}

reverse(b.name)

// console.log(b)

let variable = null;
console.log(typeof variable); // "object"


let numbers = [2, 5, 8, 1, 4];
let res = numbers.some(number => number >= 6);
console.log(res);  // true




const arr=[3,1,2,5,6];
var small = arr[0]
for (let i=0 ; i<5; i++){
 
  if(arr[i]<small){
    small = arr[i];
  }
  
}
console.log(small)
