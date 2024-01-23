import axios, {AxiosResponse} from "axios";
import {Todo} from "./todo";
import {config} from "../config";

class TodoFetcher {
    private readonly baseUrl: string;

    constructor(url) {
        this.baseUrl = config.todoBaseUrl;
    }

    async fetchTodoById(todoId: number): Promise<Todo> {
        const url = `${this.baseUrl}/${todoId}`;
        try {
            const response: AxiosResponse<Todo> = await axios.get(url);
            return response.data
        } catch (error) {
            console.error(`Can not get todo ${todoId}`, error);
            throw new Error(`Can not get todo ${todoId}`)
        }
    }
}

export {TodoFetcher}
