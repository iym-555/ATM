#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`); // template literals
            //console.log("your balance is:" + myBalance); //concatenation
        }
    }
    else if ((operationAns.operation === "Check Balance")) {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fast = await inquirer.prompt([
            {
                name: "FastCash",
                type: "list",
                message: "Select the amount which you want to withdraw",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        myBalance -= fast.FastCash;
        console.log(`You have successfully withdrawal ${fast.FastCash} \nYour remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
