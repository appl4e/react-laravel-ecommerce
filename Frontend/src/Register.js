import React, {useState, useEffect} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Header from "./Header"

function Register() {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const history = useHistory();
  let item = {name, email, password}

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      history.push('/add');
    }
  }, [])
  
  async function signUp(){

    console.log(item);
    
    let result = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'

      }
    });

    result = await result.json();
    console.log('result = ' + JSON.stringify(result));
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push('/add');



  }

  return (
    <div>
      <Header/>
      <h1 className="text-center text-uppercase mt-5 pt-5 mb-4">Sign Up</h1>
      <Row className="justify-content-center">
        <Col lg="4">
          <Form.Group>
            <Form.Control placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Email" type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="text-center">
            <Button variant="primary" onClick={signUp}>Submit</Button>
          </Form.Group>
        </Col>
      </Row>
    </div>
  )
}

export default Register