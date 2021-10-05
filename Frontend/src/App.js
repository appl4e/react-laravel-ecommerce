import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import { Protected } from "./Protected";
import ProductList from "./ProductList";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					{/* <Header /> */}
					{/* <h1>Ecomm Project</h1> */}
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/register">
						<Register></Register>
					</Route>
					<Route path="/add">
						{/* <AddProduct></AddProduct> */}
						<Protected Comp={AddProduct} />
					</Route>
					<Route path="/update">
						{/* <UpdateProduct></UpdateProduct> */}
						<Protected Comp={UpdateProduct} />
					</Route>
					<Route path="/">
						<Protected Comp={ProductList} />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
