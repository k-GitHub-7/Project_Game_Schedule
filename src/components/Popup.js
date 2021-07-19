import React, {useState} from 'react';
import { Modal, Button, Form } from "react-bootstrap";


export default function Popup(show){

    const [hide, setHide] = useState(false);

    console.log("mod file",show);
    return <div id="modal-dialog"><Modal show = { show } onHide={hide}>
    < Modal.Header >

    </Modal.Header >
   <Modal.Body>

    </Modal.Body>
    <Modal.Footer>
        <Button variant="default" className="modal__btn" onClick={() => setHide(true)}>Close</Button>
    </Modal.Footer>
</Modal ></div>
} 