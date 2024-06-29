import style from "./home.module.css";
import {Link} from "react-router-dom";


export const Home = () => {
    return(
    <article>
       <section className={style["greeting-section"]} >
            <p className={style["greeting-text"]}>
                Здравейте, Николай Александров Петров,<br/>
                нека доставим усмивка на клинетите ни.
            </p>
       </section> 
        
        <section className={style["functionality-section"]}>
            <div className={style["tovarene-div"]}>
                <Link to="/tovarene" className={style["tovarene-ot-men"]}>Товарене от мен 
                <svg className={style["right-arrow"]} xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 -960 960 960">
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg> </Link>
            <div className={style["bottom-divs"]}>
                <div>
                    <Link to="/tursi-tovarene" className={style["tursi-tovarene"]}>
                        Търси протокол <svg className={style["right-arrow-bottom"]} xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 -960 960 960">
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                    </Link>
                </div>
                <div>
                <Link to="/tursi-tovarene" className={style["tursi-tovarene"]}>
                        Нов протокол <svg className={style["right-arrow-bottom"]} xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 -960 960 960">
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                    </Link>
                </div>
            </div>
                
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>

    </article>
    );
}