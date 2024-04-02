#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\twellcome to codewithfaiz-CLI Number Guesting Game\n");

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userguestnumber",
    type: "number",
    message: "Enter Your Guess Number(Number limit from 1 to 6):",
  },
]);

if (answer.userguestnumber === randomNumber) {
  console.log("\nCongratulation ! You Guest A Correct Number>");
} else {
  console.log("\nSorry,You Guess A Wrong Number.");
}
