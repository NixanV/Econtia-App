import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getOneLoading } from "../../services/loadingService";

export const TovareneDetails = () => {
    const [detail, setDetail] = useState([]);
    const {tovareneId} = useParams();

    useEffect(() => {
        getOneLoading(tovareneId).then(
            res => setDetail(res),
            
        )

    }, [tovareneId]);

    console.log(detail);


    return(
        <p>
            {detail.nameOfLine}
        </p>
    )
}