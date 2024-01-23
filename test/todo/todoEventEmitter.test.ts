import {TodoEventEmitter} from "../../src/todo/todoEventEmitter";
import {TodoFetcher} from "../../src/todo/todoFetcher";
import {TodoTransformer} from "../../src/todo/todoTransformer";
import mocked = jest.mocked;


jest.mock('../../src/todo/todoFetcher', () => ({
    TodoFetcher: jest.fn().mockImplementation(() => ({
        fetchTodoById: jest.fn(),
    })),
}));

jest.mock('../../src/todo/todoTransformer', () => ({
    TodoTransformer: jest.fn().mockImplementation(() => ({
        transform: jest.fn(),
    })),
}));

describe('TodoEventEmitter', () => {
    let  todoEventEmitter = new TodoEventEmitter();

    beforeEach(() => {
        jest.clearAllMocks();

        todoEventEmitter = new TodoEventEmitter();
    });

    it('should handle "getTodo" event by fetching and transforming the todo', async () => {
        const todoId = 1;

        const mockedFetcher = mocked(TodoFetcher)
        const mockTransformer = mocked(TodoTransformer);

        await todoEventEmitter.emit('getTodo', {todoId});

        expect(mockedFetcher).toHaveBeenCalled();
        expect(mockTransformer).toHaveBeenCalled();
    });
})
