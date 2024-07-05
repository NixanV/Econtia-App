import { useEffect, useState } from "react"
import { getAllLoading } from "../../services/loadingService";
import { TovareneComponent } from "../TovareneComponent/TovareneComponent";
import style from "./TursiTovarene.module.css"

export const TursiTovarene = () => {
    const [lines, setLine] = useState([]);

    useEffect(() => {
        getAllLoading().then((result) => {
            setLine(Object.values(result))
        })
    }, [])

    return(
        <section className={style["section-t-tovarene"]}>
            {!lines ? 
            <div>
                no lines existed
            </div> : lines.map((line) => (
                <TovareneComponent key={line._id} {...line} />
            ))}
        </section>
    )
}