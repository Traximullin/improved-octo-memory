import { FC, useState } from "react";
import styles from "./DropDownList.module.scss"

const DropDownList: FC = () => {
    const [active,setActive] = useState<boolean>(false)

    return (
        <div className={styles["drow-down-list"]}>
            <div className={styles["drow-down-list__header"]}>
                <p className={styles["drow-down-list__title"]} onClick={() => setActive(prev => !prev)}>Team</p>
                <div className={styles["drow-down-list__arrow"]}></div>
            </div>
            {
                <div 
                    className={[styles["drow-down-list__items"], active && styles["drow-down-list__items_active"]].join(" ")}
                >
                    <div className={styles["drow-down-list__item"]}>All projects (3)</div>
                    <div className={[styles["drow-down-list__item"], styles["drow-down-list__item_active"]].join(" ")}>
                    All projects (3)
                    </div>
                    <div className={styles["drow-down-list__item"]}>All projects (3)</div>
                    <div className={styles["drow-down-list__item"]}>All projects (3)</div>
                </div>
            }
        </div>
    )
}

export default DropDownList
