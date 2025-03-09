"use strict";

module.exports.fiveAttributes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "John Doe",
      age: 30,
      city: "New York",
      profession: "Developer",
      hobby: "Gaming",
    }),
  };
};

module.exports.tenAttributes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "Jane Doe",
      age: 28,
      city: "Los Angeles",
      profession: "Designer",
      hobby: "Photography",
      country: "USA",
      language: "English",
      favorite_food: "Sushi",
      pet: "Dog",
      sport: "Basketball",
    }),
  };
};
