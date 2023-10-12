import React, { useState } from 'react'
import styles from './TodoList.module.css'
import TodoElement from '../TodoElement/TodoElement'
import { IconClipboardText } from '@tabler/icons-react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [titleInput, setTitleInput] = useState('')

  const addTodo = (title) => {
    if (title) {
      setTodos([
        {
          _id: Math.random(),
          title,
          isCompleted: false
        },
        ...todos,
      ])
      setTitleInput('');
    }
  }

  const changeTodo = (id) => {
    const editedTodo = [...todos]
    const current = editedTodo.find(todo => todo._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(editedTodo)
  }

  const deleteTodo = (id) => {
    const editedTodo = [...todos].filter(todo => todo._id !== id)
    setTodos(editedTodo)
  }

  return (
      <div className={styles['todo-list']}>
        <div className={styles['todo-list-add']}>
        <input onChange={(e) => setTitleInput(e.target.value)} className={styles['todo-list-add__input']} value={titleInput} onKeyDown={(ev) => { if (ev.key === 'Enter') { addTodo(titleInput) }}} placeholder='Введите свою будущую задачу!' type="text" />
        <button onClick={() => addTodo(titleInput)} className={styles['todo-list-add__button']}>Добавить</button>
        </div>
        <div className={styles['todo-list-header']}>
          <div className={styles['todo-list-header__title']}>
            Созданных задач <span className={styles['todo-list-header__badge']}>{todos.length}</span>
          </div>
          <div className={styles['todo-list-header__title']}>
            Завершенные <span className={styles['todo-list-header__badge']}>{[...todos.filter(todo => todo.isCompleted)].length}</span>
          </div>
        </div>
        <div className={styles['todo-list-body']}>
          {todos.length === 0 && <div className={styles['todo-list-body-empty']}>
            <IconClipboardText size={56} className={styles['todo-list-body-empty__icon']} />
            <span className={styles['todo-list-body-empty__title']}>У вас еще нет созданных задач</span>
            <span className={styles['todo-list-body-empty__subtitle']}>Создавайте задачи и организуйте свои дела</span>
          </div>}
          {todos.map(todo => <TodoElement key={todo._id} todo={todo} changeTodo={changeTodo} deleteTodo={deleteTodo} />)}
        </div>
      </div>
  )
}

export default TodoList