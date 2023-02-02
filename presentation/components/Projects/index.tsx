import { plusSvg } from "@/presentation/assets/svg";
import { FC } from "react";
import Button from "../Button";
import styles from "./Projects.module.scss"
import Image from "next/image";
import DropDownList from "../DropDownList";

const Projects: FC = () => {
    
    return (
        <div className={styles.projects}>
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
    )

}

export default Projects
