import { useEffect, useState } from "react";
import { getAllGrouping } from "../../../services/groupingService";



export const SearachingGrouping = () => {

    const [lines, setLines] = useState([]);

    useEffect(() => {
        getAllGrouping().then(result => {
            setLines(Object.values(result))
        })
    }, [])


    return(
        <section className={style["section-t-grupirane"]}>
        {!lines ? 
        <div>
            no lines existed
        </div> : lines.map((line) => (
            <TovareneComponent key={line._id} {...line} />
        ))}
    </section>
    )
}