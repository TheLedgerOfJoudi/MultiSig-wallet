import { Card, Button, Modal, Form } from 'react-bootstrap';
import * as React from 'react'

const AddTransactionModal = ({show, handleClose}) => { 
    const receiverRef = React.useRef(null);
    const amountRef = React.useRef(null);
    
    const handleKeyPress = (target) => {
        if(target.charCode === 13){
            target.preventDefault();
            handleAdd();
        } 
    }

    const handleAdd = () => {
        if (!receiverRef || !receiverRef.current || !amountRef || !amountRef.current) return;
        // if(!receiverRef.current.value || !amountRef.current.value ){
        //     alert('Fields shouldn\'t be empty')
        //     return;
        // }


        handleClose();
    }

    React.useEffect(() => {
        if (receiverRef && receiverRef.current)
        receiverRef.current.focus()
    }, []);

    return (<Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Initiate a new transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>To</Form.Label>
                    <Form.Control required ref={receiverRef} type="text" placeholder="reciever" 
                    onKeyPress={handleKeyPress} value=""/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control required ref={amountRef} type="text" placeholder="amount" 
                    onKeyPress={handleKeyPress} value=""/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Initiate
          </Button>
        </Modal.Footer>
    </Modal>)
}

function InitiateTransaction(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div>
            <Card className="text-center" onClick={() => setModalShow(true)}>
                <Card.Body >
                    <Card.Title>
                        Initiate a new transaction
                    </Card.Title>
                </Card.Body>
            </Card>
            <AddTransactionModal show={modalShow} handleClose={() => setModalShow(false)}/>
        </div>
    )
}

export default InitiateTransaction;