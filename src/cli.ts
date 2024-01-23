import {Command} from 'commander';
import {TodoTask} from "./todo/todoTask";


const program = new Command();

program
    .description('Command line tool to fetch and display TODOs.');

program.command(
    'getTodo'
).option('-count <count>', 'how many todos to get', '20')
    .action(function () {
        const todoTask = new TodoTask()
        todoTask.getEventTodos(this.opts().Count);
    }).parse();

