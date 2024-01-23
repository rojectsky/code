import {BaseEventEmitter} from "../eventEmitter";
import {TodoFetcher} from "./todoFetcher";
import {TodoTransformer} from "./todoTransformer";
import {TodoEvents} from "./todo";

class TodoEventEmitter extends BaseEventEmitter<TodoEvents> {

    private toDoFetcher;
    private todoTransformer: TodoTransformer;

    constructor() {
        super()
        this.toDoFetcher = new TodoFetcher('');
        this.todoTransformer = new TodoTransformer();
    }

    protected addHandlers() {
        this.on('getTodo', async (eventData: TodoEvents['getTodo']) => {
            const todo = await this.toDoFetcher.fetchTodoById(eventData.todoId);
            console.log(this.todoTransformer.transform(todo));
        })
    }

}

export {TodoEventEmitter}
