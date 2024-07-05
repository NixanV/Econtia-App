import style from "./novTovarene.module.css";
import {Button, Form} from "react-bootstrap";


export const NovTovarene = () => {

    return(
        <Form>
            <Form.Group className={style["mb-3"]} controlId="formBasicEmail">
                <Form.Label>Номер на линията: </Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group className={style["mb-3"]} controlId="formBasicPassword">
                <Form.Label>Име на линията: </Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            
            <Form.Group className={style["mb-3"]} controlId="formBasicPassword">
                <Form.Label>Шофьор: </Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}