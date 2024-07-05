import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getOneLoading } from "../../services/loadingService";
import style from "./tovareneDetails.module.css"

export const TovareneDetails = () => {
    const [detail, setDetail] = useState([]);
    const {tovareneId} = useParams();
    const today = new Date();

    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = date + "." + month + "." + year;

    useEffect(() => {
        getOneLoading(tovareneId).then(
            res => setDetail(res),  
        )
    }, [tovareneId]);



    return(
        <>
            <div className={style["info-for-loading-line"]}>
                <p className={style["text-info-loading-line"]}>
                    {detail._id}/ <span className={style["date-span"]}>{currentDate}</span> От {detail.numberOfLine} - София - София НЛЦ Искър <br/>
                    Шофьор: {detail.driver}
                </p>
                <input type="text" className={style["input-text-loading"]}>
                </input>
            </div>

            <div className={style["under-text-bar"]}>
                <div className={style["number-of-packets"]}>
                    0/{detail.numberOfPackets}
                </div>
                <div className={style["number-of-loading-packages"]}> {/*hard-coded should fix loading packeges*/}
                    0/2 
                </div>
            </div>
        </>
        
    )
}