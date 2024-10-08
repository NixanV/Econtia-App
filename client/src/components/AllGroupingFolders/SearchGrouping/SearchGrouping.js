import { useEffect, useState } from "react";
import { getAllGrouping } from "../../../services/groupingService";
import { GroupingComponent } from "../GroupingComponent/GroupingComponent";
import style from "./searchgrouping.module.css"


export const SearchingGrouping = () => {

    const [lines, setLines] = useState([]);

    // useEffect(() => {
    //     getAllGrouping().then(
    //         result => {
    //         setLines(Object.values(result))
    //     })
    // }, [])


    useEffect(() => {
        const fetchData = async () =>{
            try{
                const res = await getAllGrouping();                
                if(res == null || res.length === 0 ){
                    console.log("no data");
                    setLines([])
                    return;
                }
                setLines(Object.values(res))
            }
            catch(error){
                console.log("error!");
                
            }
        }
        fetchData()
    },[])
    
    return(
        <section className={style["section-t-grupirane"]}>
        {lines.length === 0 ? 
        <div className={style["no-content"]}>
            no groups existed
        </div> : lines.map((line) => (
            <GroupingComponent key={line._id} {...line} />
        ))}
    </section>
    )
}