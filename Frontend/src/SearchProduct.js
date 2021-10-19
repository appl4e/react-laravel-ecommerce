import Header from "./Header";
import { Row, Col, FormControl } from "react-bootstrap";
import { useState } from "react";

function SearchProduct() {
	const [data, setData] = useState([]);

	async function searchProd(key) {
		let result = await fetch(`http://localhost:8000/api/product/search/${key}`);
		result = await result.json();
		setData(result);
	}

	return (
		<div className="container-fluid">
			<Header />
			<Row className="justify-content-center mb-3">
				<Col xs md="6" lg="4">
					<h2 className="my-2 text-center">Search Product</h2>
				</Col>
			</Row>
			<Row className="justify-content-center mb-3">
				<Col xs md="7" lg="5">
					<FormControl type="search" placeholder="Search for product" onChange={(e) => searchProd(e.target.value)} />
				</Col>
			</Row>

			<Row className="justify-content-center mb-3">
				<Col xs md="10" lg="8">
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
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default SearchProduct;
