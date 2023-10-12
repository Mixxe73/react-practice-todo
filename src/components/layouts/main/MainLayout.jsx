import React from 'react'
import styles from './MainLayout.module.css'

const MainLayout = ({children}) => {
    return (
        <div className={styles['main-layout']}>
            <div className={styles['main-layout__title']}>
                <img src="/rocket.svg" alt="rocket" />
            </div>
            {children}
        </div>
    )
}

export default MainLayout