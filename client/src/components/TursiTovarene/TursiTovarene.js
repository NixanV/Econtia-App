import { useEffect, useState } from "react"
import { getAllLoading } from "../../services/loadingService";
import { TovareneComponent } from "../TovareneComponent/TovareneComponent";

export const TursiTovarene = () => {
    const [lines, setLine] = useState([]);

    useEffect(() => {
        getAllLoading().then((result) => {
            setLine(Object.values(result))

        })
    }, [])
    
    console.log(lines);

    return(
        <section>
            {lines.map((line) => (
                <TovareneComponent key={line._id} {...line} />
            ))}
        </section>
    )
}