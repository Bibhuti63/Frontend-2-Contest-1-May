/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function (student) {
    if(student.marks>50){
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function (student) {
    if(student.marks>50){
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent={
    id: 4,
    name: "susan",
    age: "20",
    marks: 45
  };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr=arr.filter(function (student) {
    return student.marks>=50;
  });
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2=[
    { id: 5, name: "john_2", age: "180", marks: 800 },
    { id: 6, name: "jack_2", age: "200", marks: 805 },
    { id: 7, name: "karen_2", age: "190", marks: 305 }
  ];
  arr=arr.concat(arr2);
  console.log(arr);
}
