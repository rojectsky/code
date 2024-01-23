import {TodoTask} from "../../src/todo/todoTask";
import {TodoEventEmitter} from "../../src/todo/todoEventEmitter";

describe('TodoTask', () => {
    let todoTask: TodoTask;

    beforeEach(() => {
        todoTask = new TodoTask();
    });

    it('should emit "getTodo" events with incremented todoId up to the specified count', () => {
        const mockEmit = jest.fn();
        todoTask['todoEventEmitter'] = ({
            emit: mockEmit,
        } as unknown) as TodoEventEmitter;

        const count = 5;
        todoTask.getEventTodos(count);

        expect(mockEmit).toHaveBeenCalledTimes(count);
        let todoId = 2;
        for (let i = 0; i < count; i++) {
            expect(mockEmit).toHaveBeenCalledWith('getTodo', { todoId });
            todoId += 2;
        }
    });


});
