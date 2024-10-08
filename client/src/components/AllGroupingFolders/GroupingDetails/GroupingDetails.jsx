import style from "./groupingD.module.css";
import { useState, useEffect } from "react";
import { getOneGrouping } from "../../../services/groupingService";
import { useParams } from "react-router-dom";

export const GroupingDetails = () => {
    const [detail, setDetail] = useState([]);
    const{groupingId} = useParams();
    const numberOfTransportPackeges = 0;
    console.log(groupingId);
    

    useEffect(() => {
        getOneGrouping(groupingId).then(
            res => setDetail(res),  
        )
    }, []);

    console.log(detail);
    

    return(
        <>
            <div>
                <input type="text" className={style["input-text"]} />
            </div>
            <div className={style["bottom-group"]}>
                <div classname={style["number-checked"]}>
                    0/{detail.numberPackeges}
                </div>
                <div className={style["number-of-transport"]}>
                    {numberOfTransportPackeges} Транспортни опаковки
                </div>
            </div>
            
        </>
        
    )
}