#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.blueBright.bold(
    "\n\t <<<<<< wellcome to codewithfaiz-CLI Number Guesting Game >>>>>> \n"));

    let loop = true;

while (loop) {

  const randomNumber = Math.floor(Math.random() * 6 + 1);

  const answer = await inquirer.prompt([
    {
      name: "userguestnumber",
      type: "number",
      message: "Enter Your Guest Number(Number limit from 1 to 6):",
    },
  ]);

  if (answer.userguestnumber === randomNumber) {
    console.log(
      chalk.green("\nCongratulation ! You Guest A Correct Number.\n")
    );
  } else {
    console.log(chalk.red("\nSorry,You Guess A Wrong Number.\n"));
  }

  const GuestingMore = await inquirer.prompt({
    type: "confirm",
    name: "more",
    message: "Do You Want To More Guesting?",
    default: false,
  });

  if (!GuestingMore.more) {
    loop = false;
    console.log(chalk.yellow("\nThank You"));
  }
}
