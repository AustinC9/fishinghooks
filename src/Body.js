import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap'

function Body(props) {
  const [boatType, setBoatType] = useState("");
  
  
  // setState('Goodbye World!')
  // const [number, setNumber] = useState(0)
  // const buttonHandlerNumber = () => {
  //   setNumber(number + 1);
  // };
  //const [boatType, setBoatType] = useState();
  
  let showHide = props.currentPage;
  
    // <div className="d-flex flex-column">
    //   <Button onClick={() => setBoatType('Little Boat')}>click me to buy Little Boat</Button>
    //   <Button onClick={() => setBoatType('Yacht')}>click me to buy a Yacht</Button>
    //   {boatType}
    //   <Button onClick={buttonHandlerNumber}>click me for new number</Button>
    //   {number}
    // </div>
    {
      if (showHide === 0) {

        return (
          <Form>
              <FormGroup tag="fieldset" row>
                  <legend className="col-form-label col-sm-2">{boatType}</legend>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check onClick={() => setBoatType('Little Boat')}>
                        <Input type="radio" name="radio1" />
                        Little Boat
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check onClick={() => setBoatType('Yacht')}>
                        <Input type="radio" name="radio1" />
                        Yacht
                      </Label>
                    </FormGroup>
                  </Col>
              </FormGroup>
          </Form>
        )
      } else {
        return(
          <div></div>
        )
      }
    }
}

export default Body;


