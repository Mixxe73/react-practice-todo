import React from 'react'
import styles from './MainLayout.module.css'
import rocket from '../../../assets/icons/rocket.svg'

const MainLayout = ({children}) => {
    return (
        <div className={styles['main-layout']}>
            <div className={styles['main-layout__title']}>
                <img src={rocket} alt="rocket" />
            </div>
            {children}
        </div>
    )
}

export default MainLayout