import { FC } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import styles from "./SidebarItem.module.scss"
interface Props {
    icon: string
    to: string
}

const SidebarItem: FC<Props> = ({icon, to,}) => {
    const { asPath, } = useRouter()
    const currentClasses = [styles["sidebar-item"]]
    
    const currentLink = asPath === to

    if(currentLink) currentClasses.push(styles["sidebar-item_active"])

    return (
        <div className={currentClasses.join(" ")}>
            <Link href={to}>
                <Image
                    src={icon}
                    alt="Logo web sidebar"
                    width={22}
                    height={22}
                />
            </Link>
        </div>
    )
}

export default SidebarItem