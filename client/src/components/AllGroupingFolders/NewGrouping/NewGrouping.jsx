import style from "./newgrouping.module.css";
import {Button, Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NewGrouping = () => {

    

    const onSubmitHandler = () => {
        return null;
    }

    const changeHandler = () => {
        return null;
    }

    const clickingSubmit = () => {
        return null;
    }

    return(       
        <Form onSubmit={(e) => onSubmitHandler(e)} className={style["form-nov-tovarene"]}>
            <Form.Group className={style["mb-3"]} controlId="formBasicEmail">
                <Form.Label className={style["labels-nov-tovarene"]}>Номер на линията: </Form.Label>
                <Form.Control
                    className={style["textarea-nov-t"]}
                    type="text"
                    name="numberOfLine"
                    onChange={(e) => changeHandler(e)}
                    //value={data.numberOfLine}
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
                    //value={data.nameOfLine}
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
                    //value={data.driver}
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