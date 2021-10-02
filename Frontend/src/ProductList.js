import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";

function ProductList() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const productData = await fetchData();
			setData(productData);
		};
		getData();
	}, []);

	const fetchData = async () => {
		const result = await fetch("http://localhost:8000/api/product/list");
		const data = await result.json();
		return data;
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
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.price}</td>
									<td>{item.description}</td>
									<td>
										<img src={"http://localhost:8000/" + item.file_path} alt="" className="img-fluid" />
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
