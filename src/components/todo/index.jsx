import * as React from 'react';

import DeleteIcon from '../../assets/delete-icon.svg'
import EditIcon from '../../assets/edit-icon.svg'

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
    <fieldset className="py-2 border border-black-200 bg-black-500 shadow-lg rounded-lg w-full flex flex-row justify-between">
      <label htmlFor={todo.id} className="">
        <div className='p-3 flex flex-row space-x-2'>
          <input 
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={handleCheckboxClick}
            className={`appearance-none border border-white w-6 rounded-full ${todo.completed ? 'bg-primary' : 'bg-none'}`}
          />
          {editing === true ? (
            <input
              type='text'
              value={todo.label}
              onChange={handleEditTodo}
              className='border border-black rounded-md w-60 bg-black-500 px-2'
            />
          ) : (
            <span className={`${
              todo.completed ? 'line-through text-gray-600' : 'text-black'
            }`}>{todo.label}</span>
          )}
        </div>
      </label>
      <div className='flex pr-3 space-x-3'>
        <button onClick={handleEditClick} className='px-3 bg-green-600 rounded-lg'>
          {editing ? "save" : <img src={EditIcon} className='w-5'/>}
        </button>
        {!editing && (
          <button onClick={handleDeleteClick} className='bg-red-400 rounded-lg px-3'>
            <img src={DeleteIcon} alt="" className='w-5'/>
          </button>
        )}
      </div>
    </fieldset>
  );
}
