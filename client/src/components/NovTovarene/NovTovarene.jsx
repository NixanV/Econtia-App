import { useEffect, useState } from "react";
import style from "./novTovarene.module.css";
import {Button, Form} from "react-bootstrap";
import { postNewLoading } from "../../services/loadingService";
import { useNavigate } from "react-router-dom";


export const NovTovarene = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        numberOfLine: "",
        nameOfLine: "",
        driver: "",
        opened: false,
    });

    let clickingSubmitTimes = 0;


    const validateInput = () => {
        return(
            data.numberOfLine.trim() !== "" &&
            data.nameOfLine.trim() !== "" &&
            data.driver.trim() !== ""
        )
    }

    

    const [loadedData, setLoadedData] = useState(validateInput());

    const changeHandler = (e) => {
        setData( state => ({
            ...state,  
            [e.target.name]: e.target.value 
            })
        )
        setLoadedData(validateInput())
        console.log(validateInput());
        
    }
    
    const clickingSubmit = (e) => {
        clickingSubmitTimes += 1;
        console.log(clickingSubmitTimes);
        
    }


    const onSubmitHandler = async (e, info) => {
        e.preventDefault();
        const res = await postNewLoading(info);
        console.log(res._id);

         navigate(`/tovarene/${res._id}`, {replace: true})
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
                <Form.Label className={style["labels-nov-tovarene"]}>Име на линията: </Form.Label>
                <Form.Control 
                    className={style["textarea-nov-t"]}
                    type="text"
                    name="nameOfLine"
                    onChange={(e) => changeHandler(e)}
                    value={data.nameOfLine}
                    required
                />
            </Form.Group>

            <Form.Group className={style["mb-3"]} controlId="formBasicPassword">
                <Form.Label className={style["labels-nov-tovarene"]}>Шофьор: </Form.Label>
                <Form.Control
                    className={style["textarea-nov-t"]}
                    type="text"
                    name="driver"
                    onChange={(e) => changeHandler(e)}
                    value={data.driver}
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