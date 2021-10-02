import React from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import Header from "./Header";
import { useState } from 'react';

function AddProduct() {
  const [name, setName]=useState("");
  const [description, setDescription]=useState("");
  const [price, setPrice]=useState("");
  const [fileName, setFileName]=useState("");
  
  async function addProd(){
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('fileName', fileName);
    formData.append('price', price);
    let result = await fetch("http://localhost:8000/api/addProduct", {
      method: 'POST',
      body: formData
    });
  }
  return (
    <div>
      <Header/>
      <Container className="pt-5">        
        <Row className="justify-content-center">
          <Col lg="4">
            <FormGroup>
              <Form.Control type="text" placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
            </FormGroup>
            <FormGroup>
              <Form.Control type="text" placeholder="Product Price" value={price} onChange={(e)=>setPrice(e.target.value)}></Form.Control>
            </FormGroup>
            <FormGroup>
            <FormGroup>
              <Form.Control type="text" placeholder="Product Description" value={description} onChange={(e)=>setDescription(e.target.value)}></Form.Control>
            </FormGroup>
              <Form.Control type="file" placeholder="Product Image" onChange={(e)=>setFileName(e.target.files[0])}></Form.Control>
            </FormGroup>
            <FormGroup>
              <Button variant="primary" onClick={addProd}>Add</Button>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddProduct
