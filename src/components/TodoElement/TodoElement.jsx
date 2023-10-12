import React from 'react'
import styles from './TodoElement.module.css'
import TodoCheck from '../TodoCheck/TodoCheck'
import cn from 'classnames'
import { IconTrash } from '@tabler/icons-react'

const TodoElement = ({ todo, changeTodo, deleteTodo }) => {
    return (
        <div className={styles['todo-element']}>
            <button className={styles['todo-element-body']} onClick={() => changeTodo(todo._id)}>
                <TodoCheck isCompleted={todo.isCompleted} />
                <div className={cn(styles['todo-element-body__title'], {
                    [styles['throught']]: todo.isCompleted
                })}>{todo.title}</div>
            </button>
            <button className={styles['todo-element-footer']} onClick={() => deleteTodo(todo._id)}>
                <IconTrash className={styles['todo-element-footer__trash']} />
            </button>
        </div>
    )
}

export default TodoElement