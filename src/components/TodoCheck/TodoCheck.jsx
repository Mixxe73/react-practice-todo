import React from 'react'
import styles from './TodoCheck.module.css'
import { IconCheck } from '@tabler/icons-react'
import cn from 'classnames'


function TodoCheck({isCompleted}) {
  return (
    <div className={cn(styles['todo-check'], {
      [styles['check']]: isCompleted
    })}>
          {isCompleted && <IconCheck size={24}/>}
    </div>
  )
}

export default TodoCheck