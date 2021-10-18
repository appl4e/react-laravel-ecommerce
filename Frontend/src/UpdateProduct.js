import React from "react";
import Header from "./Header";
import { withRouter } from "react-router";
import { useState, useEffect } from "react";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

function UpdateProduct({ match }) {
	let id = match.params.id;
	let [data, setData] = useState([]);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState("");
	useEffect(() => {
		async function fetchData() {
			let result = await fetch(`http://localhost:8000/api/product/${id}`);
			result = await result.json();
			setData(result);
			setName(result.name);
			setPrice(result.price);
			setDescription(result.description);
			setFile(result.file_path);
		}
		fetchData();
	}, [id]);
	async function updateProduct(id) {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("price", price);
		formData.append("description", description);
		formData.append("fileName", file);

		let result = await fetch("http://localhost:8000/api/product/edit/" + id + "?_method=PUT", {
			method: "POST",
			body: formData,
		});

		if (result.ok) {
			result = await result.json();
			setData(result);
			setName(result.name);
			setPrice(result.price);
			setDescription(result.description);
			setFile(result.file_path);
			alert("Product has been updated successfully");
		}
	}
	return (
		<div>
			<Header />
			<Row className="justify-content-center mb-3">
				<Col xs md="6" lg="4">
					<h2>Update Product</h2>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col xs md="6" lg="4">
					<Form.Group>
						<FormControl type="text" defaultValue={name} onChange={(e) => setName(e.target.value)}></FormControl>
					</Form.Group>
					<Form.Group>
						<FormControl type="text" defaultValue={price} onChange={(e) => setPrice(e.target.value)}></FormControl>
					</Form.Group>
					<Form.Group>
						<FormControl type="text" defaultValue={description} onChange={(e) => setDescription(e.target.value)}></FormControl>
					</Form.Group>
					<Form.Group>
						<FormControl type="file" defaultValue={file} onChange={(e) => setFile(e.target.files[0])}></FormControl>
					</Form.Group>
					<Row>
						<Col lg="4">
							<img src={"http://localhost:8000/" + data.file_path} className="img-fluid" alt="" />
						</Col>
					</Row>
					<Button variant="primary" className="mt-3" onClick={() => updateProduct(data.id)}>
						Update
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default withRouter(UpdateProduct);
