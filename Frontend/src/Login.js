import { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom"
import Header from "./Header"

function Login(){
  const history = useHistory();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  let item = {email, password};
  let userInfo = localStorage.getItem('user-info');

  useEffect(()=>{
    if(userInfo){
      history.push('/add');
    }
  })

  async function login(){
    

    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });

    result = await result.json()

    localStorage.setItem("user-info", JSON.stringify(result));

    history.push('/add');
  }
  return(
    <div>
      <Header />
      <h1>Login Page</h1>

      <Row className="justify-content-center">
        <Col lg="4">
          <Form.Group>
            <Form.Control placeholder="email" type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="password" type="password" name="email" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Button variant="primary" onClick={login} >Login</Button>
          </Form.Group>
        </Col>
      </Row>
    </div>
  )
}

export default Login
