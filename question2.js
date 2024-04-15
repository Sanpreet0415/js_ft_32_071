// Problem 1

const foodDeliveryService = {
  serviceName: "TastyBites Delivery",
  location: "Foodville",
  restaurants: {
    italianCorner: {
      menu: {
        pizza: { available: 20, price: 12 },
        pasta: { available: 30, price: 10 },
        salad: { available: 15, price: 8 },
      },
      orders: [
        { id: 1, items: ["pizza", "pasta"], total: 22 },
        { id: 2, items: ["salad", "pasta"], total: 18 },
        { id: 3, items: ["pizza", "pasta"], total: 12 },
      ],
    },
    burgerJoint: {
      menu: {
        burger: { available: 25, price: 8 },
        fries: { available: 40, price: 4 },
        drink: { available: 30, price: 2 },
      },
      orders: [
        { id: 1, items: ["burger", "fries"], total: 12 },
        { id: 2, items: ["drink", "burger", "fries"], total: 14 },
        { id: 3, items: ["drink"], total: 2 },
      ],
    },
  },
  restaurantNames: ["italianCorner", "burgerJoint"],
};

// Level-Problem 1-1
function findDetails(foodDeliveryService, restaurantName) {
  if (restaurantName in foodDeliveryService.restaurants) {
    return foodDeliveryService.restaurants[restaurantName];
  } else {
    return "Restaurant not found";
  }
}


// Level-Problem 1-2
function calculateTotalRevenue(foodDeliveryService) {
  let totalRevenue = 0;
  for (const restaurant in foodDeliveryService.restaurants) {
    const orders = foodDeliveryService.restaurants[restaurant].orders;
    orders.forEach((order) => {
      totalRevenue += order.total;
    });
  }
  return totalRevenue;
}


// Problem 2: Student Exam Scores

const studentExamScores = [
  { name: "Alex", grades: [80, 92, 88, 95] },
  { name: "Eva", grades: [75, 88, 91, 79] },
  { name: "Max", grades: [90, 84, 87, 93] },
  { name: "Sophia", grades: [85, 89, 92, 78] },
  { name: "Oliver", grades: [88, 90, 85, 94] },
  { name: "Ava", grades: [76, 83, 88, 91] },
];


 // Problem 2-1: Calculate Average Exam Score
function calculateAverageExamScore(studentExamScores, name) {
  const student = studentExamScores.find((student) => student.name === name);
  if (student) {
    const sum = student.grades.reduce((acc, curr) => acc + curr, 0);
    return sum / student.grades.length;
  } else {
    return "Student not found";
  }
}

// Problem 2-2: Find Top Scorer
function findTopScorer(studentExamScores) {
  let maxAverage = 0;
  let topScorer = null;

  studentExamScores.forEach((student) => {
    const average = student.grades.reduce((acc, curr) => acc + curr, 0) / student.grades.length;
    if (average > maxAverage) {
      maxAverage = average;
      topScorer = student.name;
    }
  });

  return topScorer;
}

// Problem 2-3: Find Passing Students
function findPassingStudents(studentExamScores) {
  return studentExamScores.filter((student) => {
    const average = student.grades.reduce((acc, curr) => acc + curr, 0) / student.grades.length;
    return average >= 80;
  }).map((student) => student.name);
}















//don't remove below export statement part
export {
  findDetails,
  calculateTotalRevenue,
  calculateAverageExamScore,
  findTopScorer,
  findPassingStudents,
};
