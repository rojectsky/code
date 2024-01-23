import {Events} from "../event";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoEvents extends Events {
    'getTodo': {
        todoId: number
    }
}

export {Todo, TodoEvents}
