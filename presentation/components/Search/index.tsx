import { FC, useId } from "react";
import Image from "next/image";
import styles from "./Search.module.scss"
import { searchSvg } from "@/presentation/assets/svg";

const Search: FC = () => {
    const id = useId()
    
    return (
        <div className={styles.search}>
            <input 
                className={styles.search__checkbox}
                id={`search-${id}`}                
                type="checkbox" 
            />
            <input
                className={styles.search__input}
            />
            <label 
                htmlFor={`search-${id}`}
            >
                <Image
                    className={styles.search__icon}
                    src={searchSvg}
                    alt="search"
                />
            </label>
        </div>
    )
}

export default Search
