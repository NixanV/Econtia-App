import style from "./tovComponent.module.css";
import { Link } from "react-router-dom";

export const TovareneComponent = ({
    numberOfLine,
    nameOfLine,
    numberOfPackets,
    driver,
    opened,
    _id,
}) => {
    console.log(opened);
    return(
        <section className={style["section-comp"]}>
            <div className={style["main-component"]}>
                <Link to={`${_id}`} className={style["tovarene-link"]}>
                    <svg className={style["icon"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z"/></svg>
                    От линия {numberOfLine} {nameOfLine} към склад 1100 НЛЦ Искър шофьор: {driver} Пратки: {numberOfPackets} 
                </Link>
                
                
            </div>
            
        </section>
        
    )
}