import { FC } from "react"
import styles from "./SidebarItem.module.scss"
import Image from "next/image"


interface Props {
    icon: string
}

const SidebarItem: FC<Props> = ({icon,}) => {
    return (
        <div className={[styles["sidebar-item"], styles["sidebar-item_active"]].join(" ")}>
            <Image
                src={icon}
                alt="Logo web sidebar"
                width={22}
                height={22}
            />
        </div>
    )
}

export default SidebarItem