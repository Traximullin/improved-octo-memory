import { FC } from "react";
import Image from "next/image";
import styles from "./Sidebar.module.scss"
import SidebarItem from "./localComponent/SidebarItem";
import { 
    calendarSvg,
    canbanSvg,
    chartsSvg,
    cloudSvg,
    logoSvg,
    mapsSvg, 
    profileSvg,
    settingSvg 
} from "@/presentation/assets/svg";

const Sidebar: FC = () => (
    <nav className={styles.sidebar}>
        <div className={styles.sidebar__navigation}>
            <Image
                src={logoSvg}
                alt="Logo web sidebar"
                width={24}
                height={26}
            />
            <SidebarItem icon={canbanSvg} />
            <SidebarItem icon={profileSvg} />
            <SidebarItem icon={calendarSvg} />
            <SidebarItem icon={chartsSvg} />
            <SidebarItem icon={cloudSvg} />
            <SidebarItem icon={mapsSvg} />
            <SidebarItem icon={settingSvg} />
        </div>
        <div>
            2
        </div>
    </nav>
)

export default Sidebar
