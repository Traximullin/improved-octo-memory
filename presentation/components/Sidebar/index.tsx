import { FC } from "react";
import Image from "next/image";
import styles from "./Sidebar.module.scss"
import SidebarItem from "./localComponent/SidebarItem";
import { 
    calendarSvg,
    canbanSvg,
    chartsSvg,
    cloudSvg,
    exitSvg,
    logoSvg,
    mapsSvg, 
    profileSvg,
    settingSvg
} from "@/presentation/assets/svg";

const Sidebar: FC = () => (
    <nav className={styles.sidebar}>
        <div className={styles.sidebar__navigation}>
            <div className={styles.sidebar__dots} />
            <Image
                src={logoSvg}
                alt="Logo web sidebar"
                width={24}
                height={26}
            />
            <SidebarItem 
                icon={canbanSvg} 
                to="/" 
            />
            <SidebarItem 
                icon={profileSvg} 
                to="/profile" 
            />
            <SidebarItem 
                icon={calendarSvg} 
                to="/calendar" 
            />
            <SidebarItem 
                icon={chartsSvg} 
                to="/charts" 
            />
            <SidebarItem 
                icon={cloudSvg} 
                to="/cloud" 
            />
            <SidebarItem 
                icon={mapsSvg} 
                to="/maps" 
            />
            <SidebarItem 
                icon={settingSvg} 
                to="/settings" 
            />
        </div>
        <div>
            <Image
                src={exitSvg}
                alt="exit"
                width={17.5}
                height={16.5}
            />
        </div>
    </nav>
)

export default Sidebar
