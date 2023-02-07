import Image from "next/image";
import { plusSvg } from "@/presentation/assets/svg";
import { FC } from "react";
import styles from "./Projects.module.scss"
import { DropDownList, Button, ToggleSwitch } from "../index"

const Projects: FC = () => {
    
    return (
        <div className={styles.projects}>
            <div>
                <div className={styles.projects__header}>
                    <p className={styles.projects__title}>Projects</p>
                    <Button themes="circle">
                        <Image
                            alt="123"
                            width={12}
                            height={12}
                            src={plusSvg}
                        />
                    </Button>
                </div>
                <div className={styles.projects__list}>
                    <DropDownList/>
                    <DropDownList/>
                    <DropDownList/>
                </div>
            </div>
            <ToggleSwitch/>
        </div>
    )

}

export default Projects
