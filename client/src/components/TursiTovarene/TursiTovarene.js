import { useEffect, useState } from "react"
import { getAllLoading } from "../../services/loadingService";
import { TovareneComponent } from "../TovareneComponent/TovareneComponent";
import style from "./TursiTovarene.module.css"

export const TursiTovarene = () => {
    const [tlines, setTLine] = useState([]);

    useEffect(() => {
        getAllLoading().then((result) => {
            setTLine(Object.values(result))
        })
    }, [])

    console.log(tlines);
    return(
        <section className={style["section-t-tovarene"]}>
            {tlines.length === 0 ?
            (
               <>
                    <p> 
                        no lines existed
                    </p>
                </> 
            )
            
             :(tlines.map((line) => (
                <TovareneComponent key={line._id} {...line} />)
            ))}
        </section>
    )
}