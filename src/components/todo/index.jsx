import * as React from 'react';

export default function Todo({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const [completed, setCompleted] = React.useState(false)
  const [editing, setEditing] = React.useState(false)
  const handleCheckboxClick = () => handleUpdateTodo({
    ...todo,
    completed: !todo.completed
  })
  const handleEditClick = () => setEditing(!editing)
  const handleEditTodo = (e) => handleUpdateTodo({
    ...todo,
    label: e.target.value
  })

  const handleDeleteClick = () => handleDeleteTodo(todo.id)

  return (
    <fieldset className="border border-black rounded-lg w-full flex flex-row justify-between">
      <label htmlFor={todo.id} className="">
        <div className='p-3 flex flex-row space-x-2'>
          <input 
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
          {editing === true ? (
            <input
              type='text'
              value={todo.label}
              onChange={handleEditTodo}
              className=''
            />
          ) : (
            <span className={`${
              completed ? 'line-through text-gray-600' : 'text-black'
            }`}>{todo.label}</span>
          )}
        </div>
      </label>
      <div className='flex pr-3 space-x-3'>
        <button onClick={handleEditClick} className='underline text-green-500'>
          {editing ? "save" : "Edit"}
        </button>
        {!editing && (
          <button onClick={handleDeleteClick} className='underline text-red-500'>
            Delete
          </button>
        )}
      </div>
      
    </fieldset>
  );
}
