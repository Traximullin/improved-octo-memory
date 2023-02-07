import { FC, useId } from "react"
import styles from "./ToggleSwitch.module.scss"

const ToggleSwitch : FC = () => {

    const id = useId()

    return (
        <div className={styles["toggle-switch"]}>
            <input
                className={styles["toggle-switch__checkbox"]}
                type="checkbox"
                id={`toggle-switch-${id}`}
            />
            <label 
                className={styles["toggle-switch__label"]}
                htmlFor={`toggle-switch-${id}`}
            >
                <span 
                    className={[styles["toggle-switch__inner"], styles["toggle-switch__label-item"]].join(" ")}
                >
                    Light
                </span>
                <span 
                    className={[styles["toggle-switch__switch"], styles["toggle-switch__label-item"]].join(" ")}
                >
                    Dark
                </span>
            </label>
        </div>
    )
}

export default ToggleSwitch