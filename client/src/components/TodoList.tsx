import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from "react";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import Spinner from '@material-ui/core/CircularProgress';
import {addTodo, deleteTodos, getTodos, toggleTodo} from "../api";
import {useStyles} from "./TodoList.styles";
import {ITodoItem} from "../types";
import TodoItem from "./todoItem";
import emptyListImg from "../assets/emptyList.png"

export const TodoList: FC<any> = () => {
    const [todos, setTodos] = useState<ITodoItem[]>([]);
    const [entry, setEntry] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isFetching, setFetching] = useState<boolean>(true);

    const styles = useStyles({disabled: !entry})

    useEffect(() => {
        const getAllTodos = () => {
            try {
                setTimeout(async () => {
                    const {data} = await getTodos()
                    setTodos(data)
                    setFetching(false)
                }, 1000)
            } catch (err) {
                console.error("Error fetching data", err)
                setFetching(false)
            }
        }
        getAllTodos()
    }, [])

    const handleEntryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEntry(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (entry) {
            try {
                setLoading(true)
                setTimeout(async () => {
                    const {data: newTodo} = await addTodo({title: entry})
                    setTodos([...todos, newTodo])
                    setEntry("")
                    setLoading(false)
                }, 1000)
            } catch (e) {
                console.error(e)
                setLoading(false)
            }
        }
    }

    const handleCheck = async (id: string) => {
        try {
            const newTodos = [...todos]
            const currentIndex = todos.findIndex(todoItem => todoItem._id === id)
            newTodos[currentIndex].completed = !todos[currentIndex].completed
            setTodos(newTodos)
            await toggleTodo(id, newTodos[currentIndex].completed as boolean)
        } catch (e) {
            console.error(e)
        }
    }

    const handleDelete = (id: string) => {
        try {
            setLoading(true)
            setTimeout(async () => {
                const newTodos = todos.filter(todoItem => todoItem._id !== id)
                await deleteTodos(id)
                setLoading(false)
                setTodos(newTodos)
            }, 500)
        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    const renderTodoItems = (item: ITodoItem): React.ReactElement => {
        return <TodoItem
            key={item._id}
            title={item.title}
            completed={item.completed}
            onToggle={handleCheck}
            _id={item._id}
            onDelete={handleDelete}/>
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Tasks for today</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <label>
                        <input type={"text"} value={entry} onChange={handleEntryChange}
                               placeholder={"Add new task..."}/>
                    </label>
                    <div className={styles.submitBtn}>{loading
                        ? <Spinner size={20}/>
                        : <button type={"submit"} disabled={!entry}>
                            <AddIcon/>
                        </button>
                    }</div>
                </div>
            </form>
            {todos.length
                ?
                <div>
                    {todos.map(renderTodoItems)}
                </div>
                :
                <div className={styles.emptyContainer}>
                    {isFetching
                        ? <Spinner size={50}/>
                        : <img src={emptyListImg} alt={"empty list"}/>
                    }
                </div>
            }
        </div>
    )
}