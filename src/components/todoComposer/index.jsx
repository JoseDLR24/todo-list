import * as React from "react"

function createTodo (label) {
  return {
    id: Math.floor(Math.random() * 10000),
    label,
    completed: false,
  }
}

export default function TodoComposer({ handleAddTodo }) {
  const [label, setLabel] = React.useState("")

  const handleUpdateLabel = (e) => setLabel(e.target.value)

  const handleAddTodoClick = () => {
    const todo = createTodo(label)
    handleAddTodo(todo)
    setLabel("")
  }

  return (
    <li className="border border-black p-3 rounded-lg bg-black-700 flex flex-row justify-between">
      <input
        placeholder="Add a new todo"
        type="text"
        value={label}
        onChange={handleUpdateLabel}
        className="bg-black-600 w-60 lg:w-10/12 rounded-lg"
      />
      <button
        disabled={label.length === 0}
        onClick={handleAddTodoClick}
        className="underline border border-primary p-2 lg:py-2 lg:px-4 rounded-lg bg-primary"
      >
        Add Todo
      </button>
    </li>
  )
}