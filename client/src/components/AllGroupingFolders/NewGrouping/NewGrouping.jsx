import { useState } from "react";
import style from "./newgrouping.module.css";
import {Button, Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { postNewGrouping } from "../../../services/groupingService";

export const NewGrouping = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        numberOfLine: "",
        nameOfCity: "",
        numberOfPackeges: "",
    })

 

    const changeHandler = (e) => {
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        })
    )
    }

    console.log(data.nameOfCity);


    const onSubmitHandler = async (e, data) => {
        e.preventDefault();
        const res = await postNewGrouping(data);
        navigate(`/grupirane/${res._id}`, {replace:true})
    } 
    
    
    const clickingSubmit = () => {
        return null;
    }

    return(       
        <Form onSubmit={(e) => onSubmitHandler(e, data)} className={style["form-nov-tovarene"]}>
            <Form.Group className={style["mb-3"]} controlId="formBasicEmail">
                <Form.Label className={style["labels-nov-tovarene"]}>Номер на линията: </Form.Label>
                <Form.Control
                    className={style["textarea-nov-t"]}
                    type="text"
                    name="numberOfLine"
                    onChange={(e) => changeHandler(e)}
                    value={data.numberOfLine}
                    required
                />
            </Form.Group>

            <Form.Group className={style["mb-3"]} controlId="formBasicPassword">
                <Form.Label className={style["labels-nov-tovarene"]}>Населено място: </Form.Label>
                <Form.Control 
                    className={style["textarea-nov-t"]}
                    type="text"
                    name="nameOfCity"
                    onChange={(e) => changeHandler(e)}
                    value={data.nameOfCity}
                    required
                />
            </Form.Group>

            <Form.Group className={style["mb-3"]} controlId="formBasicPassword">
                <Form.Label className={style["labels-nov-tovarene"]}>Брой пратки: </Form.Label>
                <Form.Control
                    className={style["textarea-nov-t"]}
                    type="text"
                    name="numberOfPackeges"
                    onChange={(e) => changeHandler(e)}
                    value={data.numberOfPackeges}
                    required
                />
            </Form.Group>
                    
            <Button className={style["submit-button-nov-t"]} variant="primary" 
                    type="submit"  onClick={(e) => clickingSubmit(e)}>
                Submit
            </Button>

        
            
        </Form>                         
    )
}