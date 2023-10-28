import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import TodoContainer from './components/todo-container/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex flex-column h-32 items-center justify-center'>
      <h1 className='font-bold text-3xl uppercase'>Todo list app</h1>
    </div>
    <div>
      <TodoContainer />
    </div>
  </React.StrictMode>,
)
