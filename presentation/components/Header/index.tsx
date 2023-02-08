import { FC } from "react"
import { Avatar, Notifications } from "../index"
import styles from "./Header.module.scss"

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <p className={styles.header__title}>Welcome back, Vincent 👋</p>
            <div className={styles.header__right}>
                <div>1</div>
                <Notifications />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
