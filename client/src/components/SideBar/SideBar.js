import style from "./sidebar.css"

export const SideBar = () => {
    return(
        <div className={style['sidebaropen']}>
            <ul className={style['sidebaropen']}>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>

            </ul>
        </div>
    )
}