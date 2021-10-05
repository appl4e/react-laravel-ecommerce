import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function ProductList() {
	const [data, setData] = useState([]);
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const result = await fetch("http://localhost:8000/api/product/list");
		const data = await result.json();
		setData(data);
	};

	const deleteProduct = (id) => {
		const result = fetch(`http://localhost:8000/api/product/delete/${id}`, {
			method: "DELETE",
		});
		const updatedList = data.filter((d) => d.id != id);
		console.log(updatedList);
		setData(updatedList);
	};
	return (
		<div>
			<Header></Header>
			<div className="container">
				<div className="row">
					<h2>Product List</h2>
				</div>
				<div className="table-responsive row">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Price</th>
								<th>Description</th>
								<th>Image</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.price}</td>
									<td style={{ maxWidth: "400px" }} className="text-truncate">
										{item.description}
									</td>
									<td className="text-center">
										<img src={"http://localhost:8000/" + item.file_path} alt="" className="img-fluid product-image" />
									</td>
									<td>
										<Button variant="danger" onClick={() => deleteProduct(item.id)}>
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default ProductList;
