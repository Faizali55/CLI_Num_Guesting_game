#! /usr/bin/env node

import inquirer from "inquirer";

let loop = true;

while (loop) {
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
    console.log("\nCongratulation ! You Guest A Correct Number.\n");
  } else {
    console.log("\nSorry,You Guess A Wrong Number.\n");
  }

  const GuestingMore = await inquirer.prompt({
    type: "confirm",
    name: "more",
    message: "Do You Want To More Guesting?",
    default: false,
  });

  if (!GuestingMore.more) {
    loop = false;
    console.log("\nThank You");
  }
}
