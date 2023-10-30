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
    <li className="border border-black p-3 rounded-lg bg-slate-500 flex flex-row justify-between">
      <input
        placeholder="Add a new todo"
        type="text"
        value={label}
        onChange={handleUpdateLabel}
        className="bg-slate-500 w-60"
      />
      <button
        disabled={label.length === 0}
        onClick={handleAddTodoClick}
        className="underline"
      >
        Add Todo
      </button>
    </li>
  )
}