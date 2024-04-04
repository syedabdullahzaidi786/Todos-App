#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log("Welcome to the todo list app");
while (condition) {
    let operation = await inquirer.prompt({
        type: "list",
        name: "operator",
        message: "What operation you want to perform?",
        choices: ["Add", "View", "Update", "Delete"]
    });
    if (operation.operator === "Add") {
        let add = await inquirer.prompt({
            type: "input",
            name: "additems",
            message: "What thing you want to add in your todo list?"
        });
        todos.push(add.additems);
        console.log(todos);
    }
    if (operation.operator === "View") {
        console.log(todos);
    }
    if (operation.operator === "Update") {
        let update = await inquirer.prompt({
            type: "list",
            name: "updateitems",
            message: "What thing you want to update in your todo list?",
            choices: todos
        });
        let update2 = await inquirer.prompt({
            type: "input",
            name: "updateitems2",
            message: "Update Items"
        });
        let newtodos = todos.filter(value => value != update.updateitems);
        todos = [...newtodos, update2.updateitems2];
    }
    if (operation.operator === "Delete") {
        let remove = await inquirer.prompt({
            type: "list",
            name: "removeitems",
            message: "Select what items you want to delete from your list?",
            choices: todos.map(item => item)
        });
        let newtodos = todos.filter(value => value != remove.removeitems);
        todos = [...newtodos];
        console.log(todos);
    }
    let task = await inquirer.prompt({
        name: "moretask",
        type: "confirm",
        message: "Do you want to add more thing in your todo list?",
        default: "false"
    });
    condition = task.moretask;
}
console.log("Your Todos: ", todos);
