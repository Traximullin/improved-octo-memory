import { FC, ButtonHTMLAttributes } from "react"
import styles from "./Button.module.scss"

type themeButtonT = "circle"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    themes?: themeButtonT  
}

const themeStruct: { [key: string]: string } = {
    circle: styles.button_theme_circle,
}

const Button:FC<ButtonProps> = ({ children, themes, ...props }) => {
    const currentClasses = [styles.button]

    if(themes) {
        themes.split(" ").forEach(theme => currentClasses.push(themeStruct[theme]))
    }

    return (
        <button className={currentClasses.join(" ")} {...props}>
            {children}
        </button>
    )
}

export default Button
