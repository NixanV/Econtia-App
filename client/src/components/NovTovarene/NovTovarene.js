import { useEffect, useState } from "react";
import style from "./novTovarene.module.css";
import {Button, Form} from "react-bootstrap";
import { postNewLoading } from "../../services/loadingService";


export const NovTovarene = () => {

    const [data, setData] = useState({
        numberOfLine: "",
        nameOfLine: "",
        driver: ""
    });

    const changeHandler = (e) => {
        setData( state => ({
            ...state,
            [e.target.name]: e.target.value
        })
            
        )
    }

    const onSubmitHandler = (e, info) => {
        e.preventDefault();
        const res =  postNewLoading(info);
        console.log(res);
    }
    
    return(
        <Form onSubmit={(e) => onSubmitHandler(e, data)}>
            <Form.Group className={style["mb-3"]} controlId="formBasicEmail">
                <Form.Label>Номер на линията: </Form.Label>
                <Form.Control
                type="text"
                name="numberOfLine"
                onChange={(e) => changeHandler(e)}
                value={data.numberOfLine}
                />
            </Form.Group>

            <Form.Group className={style["mb-3"]} controlId="formBasicPassword">
                <Form.Label>Име на линията: </Form.Label>
                <Form.Control 
                    type="text"
                    name="nameOfLine"
                    onChange={(e) => changeHandler(e)}
                    value={data.nameOfLine}
                />
            </Form.Group>

            <Form.Group className={style["mb-3"]} controlId="formBasicPassword">
                <Form.Label>Шофьор: </Form.Label>
                <Form.Control
                    type="text"
                    name="driver"
                    onChange={(e) => changeHandler(e)}
                    value={data.driver}
                 />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}