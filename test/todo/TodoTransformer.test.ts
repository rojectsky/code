import {TodoTransformer} from "../../src/todo/todoTransformer";
import {Todo} from "../../src/todo/todo";


describe('TodoTransformer', () => {
    it('should transform todo to string with correct format', () => {
        const todo:Todo = {id:1,  title:'Test Todo', completed:false} as Todo;
        const todoTransformer = new TodoTransformer();

        const transformedTodo = todoTransformer.transform(todo);

        expect(transformedTodo).toBe('1- Test Todo. Completed: false');
    });

    it('should handle null todo', () => {
        const todoTransformer = new TodoTransformer();

        const transformedTodo = todoTransformer.transform(null);

        expect(transformedTodo).toBe('');
    });
});
