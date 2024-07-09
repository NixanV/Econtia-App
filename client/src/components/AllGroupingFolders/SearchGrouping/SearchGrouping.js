import { useEffect, useState } from "react";
import { getAllGrouping } from "../../../services/groupingService";
import { GroupingComponent } from "../GroupingComponent/GroupingComponent";
import style from "./searchgrouping.module.css"


export const SearchingGrouping = () => {

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
            <GroupingComponent key={line._id} {...line} />
        ))}
    </section>
    )
}