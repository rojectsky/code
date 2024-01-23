import axios, { AxiosResponse } from "axios";
import {Todo} from "../../src/todo/todo";
import {config} from "../../src/config";
import {TodoFetcher} from "../../src/todo/todoFetcher";

jest.mock('axios');

describe('TodoFetcher', () => {
    it('should fetch todo by id successfully', async () => {
        const todoId = 1;
        const expectedTodo: Todo = { id: todoId, title: 'Test Todo', completed: false };
        const baseUrl = config.todoBaseUrl;
        const url = `${baseUrl}/${todoId}`;

        const mockedAxiosResponse: AxiosResponse<Todo> = {
            data: expectedTodo,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        } as AxiosResponse<Todo> ;

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(mockedAxiosResponse);

        const todoFetcher = new TodoFetcher(baseUrl);

        const fetchedTodo = await todoFetcher.fetchTodoById(todoId);

        expect(fetchedTodo).toEqual(expectedTodo);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    it('should handle error when fetching todo by id', async () => {
        const todoId = 1;
        const baseUrl = config.todoBaseUrl;
        const url = `${baseUrl}/${todoId}`;

        const mockedAxiosError = new Error('Request failed');
        (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(mockedAxiosError);

        const todoFetcher = new TodoFetcher(baseUrl);

        await expect(todoFetcher.fetchTodoById(todoId)).rejects.toThrow(`Can not get todo ${todoId}`);
        expect(axios.get).toHaveBeenCalledWith(url);
    });
});
