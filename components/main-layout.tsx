import { ReactElement } from "react"
import styles from '../styles/Menu.module.sass'

interface MainLayoutContext {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutContext) => {
    return(
        <div>
            <header>
                <h1 className={styles.testStyle} >Футбольный заголовок</h1>
            </header>
            <main className={styles.container}>
                <nav >
                    <ul className={styles.menu}>
                        <li>Команда 1</li>
                        <li>Команда 2</li>
                        <li>Команда 3</li>
                        <li>Команда 4</li>
                    </ul>
                </nav>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default MainLayout