import axios from "axios"
import {ITodoItem} from "../types";

const apiUrl = "http://localhost:5000/api"

export const getTodos = () => axios.get<ITodoItem[]>(apiUrl)
export const addTodo = (newTodo: { title: string }) => axios.post<ITodoItem>(apiUrl, newTodo)
export const toggleTodo = (id: string, completed: boolean) => axios.put<ITodoItem>(apiUrl + "/" + id, {completed})
export const deleteTodos = (id: string) => axios.delete<boolean>(apiUrl + "/" + id)