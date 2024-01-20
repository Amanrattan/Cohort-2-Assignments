/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  //APProch 1:


  //   let arr = [];

  //   let obj = {}

  //   if (transactions.length != 0) {
  //     transactions.forEach(function (item) {
  //       if (item["category"] in obj) {
  //         obj[item["category"]] += item["price"];
  //       }
  //       else {
  //         obj[item["category"]] = item["price"]
  //       }
  //     });

  //     for (const prop in obj) {
  //       let newObj = {};
  //       newObj["category"] = prop;
  //       newObj["totalSpent"] = obj[prop];
  //       arr.push(newObj);
  //     }
  //     return arr;
  //   }

  //   return [];


  //APProch 2:

  // Create an object to store the total spent for each category
  const categoryTotal = {};

  // Iterate over each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If the category doesn't exist in the categoryTotal object, create it
    if (!categoryTotal[category]) {
      categoryTotal[category] = 0;
    }

    // Add the price of the current transaction to the total for its category
    categoryTotal[category] += price;
  });

  // Convert the categoryTotal object into an array of objects
  const result = Object.keys(categoryTotal).map(category => ({
    category,totalSpent: categoryTotal[category]
  }));

  return result;

}

module.exports = calculateTotalSpentByCategory;
