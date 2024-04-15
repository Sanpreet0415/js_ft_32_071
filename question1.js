//Problem 1:
let arr = [
  {
    name: "student1",
    subjects: [
      { Maths: 60 },
      { History: 30 },
      { English: "50" },
      { Biology: "40" },
    ],
    total: "",
  },
  {
    name: "student2",
    subjects: [
      { Maths: "35" },
      { History: "66" },
      { English: "20" },
      { Biology: "30" },
    ],
    total: "",
  },
];

function findTotal(arr) {
//write your code here..
let sum=0;
sum+=arr.subject.Maths;
return sum;
}
console.log(finTotal(arr));





