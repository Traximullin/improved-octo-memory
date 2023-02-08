import Image from "next/image"
import {FC} from "react"
import { mujicImg } from "@/presentation/assets/image"
import styles from "./Avatar.module.scss"

const Avatar: FC = () => {
    return (
        <div className={styles.avatar}>
            <Image
                src={mujicImg}
                width={36}
                height={36}
                alt="avatar"
                className={styles.avatar__image}
            />
        </div>
    )
}

export default Avatar