import { notificationsSvg } from "@/presentation/assets/svg"
import { FC } from "react"
import styles from "./Notifications.module.scss"
import Image from "next/image"

const Notifications: FC = () => {
    return (
        <div className={styles.notifications}>
            <Image
                className={styles.notifications__icon}
                src={notificationsSvg}
                alt="notifications"
            />
        </div>
    )
}

export default Notifications
