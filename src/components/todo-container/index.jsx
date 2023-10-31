import * as React from "react"
import Todo from '../todo/index'
import TodoComposer from '../todoComposer/index'

export default function TodoContainer() {
    const [todos, setTodos] = React.useState([
        {   id: 1,
            label: "Learn React",
            completed: false,
        }, {
            id: 2,
            label: "Learn Next",
            completed: false,
        }, {
            id: 3,
            label: "Learn Redux",
            completed: false,
        }
    ])

    const handleUpdateTodo = (updatedTodo) => {
        const newTodos = todos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        )
        setTodos(newTodos)
    }

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    const handleAddTodo = (newTodo) => {
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    return (
        <main className="flex flex-col items-center">
                <ul className="w-96 lg:w-5/12 min-h-full bg-black-500 shadow-xl border-2 border-primary rounded-lg p-3 space-y-2">
                    <TodoComposer handleAddTodo={handleAddTodo} />
                    {todos.map((todo) => (
                        <Todo 
                        key={todo.id}
                        todo={todo}
                        handleUpdateTodo={handleUpdateTodo}
                        handleDeleteTodo={handleDeleteTodo}
                        />
                    ))}
                </ul>     
        </main>
    ) 
}
