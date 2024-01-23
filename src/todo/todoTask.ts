import {TodoEventEmitter} from "./todoEventEmitter";
import {EventEmitter} from "../eventEmitter";
import {TodoEvents} from "./todo";

class TodoTask {
    private todoEventEmitter: EventEmitter<TodoEvents>

    constructor() {
        this.todoEventEmitter = new TodoEventEmitter();
    }

    getEventTodos(count = 20) {
        let todoId = 2;
        while (todoId / 2 <= count) {
            this.todoEventEmitter.emit('getTodo', {todoId});
            todoId = todoId + 2;
        }
    }
}


export {TodoTask}
