import axios, { type AxiosResponse } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Data received:", response.data);
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.message);
            if (error.response) {
                console.error("Error response:", error.response.status, error.response.data);
            }
        }
    }
};
