import {Todo} from "./todo";

class TodoTransformer {
    transform(todo: Todo) {
        return todo ? `${todo.id}- ${todo.title}. Completed: ${todo.completed}` : ''
    }
}

export {TodoTransformer}
