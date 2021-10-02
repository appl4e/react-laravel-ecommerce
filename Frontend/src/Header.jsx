import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Header() {
	const history = useHistory();
	let userInfo = JSON.parse(localStorage.getItem("user-info"));

	function logOut() {
		localStorage.clear();
		history.push("/login");
	}

	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container className="justify-content-start">
					<Navbar.Brand href="#home">React Laravel Ecommerce</Navbar.Brand>
					<Nav className="ml-auto">
						{userInfo ? (
							<>
								<Nav.Link as={Link} to="/">
									Products
								</Nav.Link>
								<Nav.Link as={Link} to="/add">
									Add Product
								</Nav.Link>
								<Nav.Link as={Link} to="/update">
									Update Product
								</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link as={Link} to="/login">
									Login
								</Nav.Link>
								<Nav.Link as={Link} to="/register">
									Registration
								</Nav.Link>
							</>
						)}
					</Nav>
					{userInfo ? (
						<>
							<Nav>
								<NavDropdown title={userInfo && userInfo.name} id="basic-nav-dropdown">
									<NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</>
					) : (
						<></>
					)}
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
