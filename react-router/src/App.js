import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
	NavLink,
	Navigate,
} from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import Error from "./components/Error";

export default function App() {
	let activeStyle = {
		textDecoration: "underline",
	};

	const passiveStyle = {
		textDecoration: "line-through",
	};

	let activeClassName = "underline";

	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<NavLink
								to="/"
								style={{ color: "black" }}
								activeStyle={{ color: "blue" }}
								className="nav_link"
								activeClassName="active"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								style={{ color: "black" }}
								activeStyle={{ color: "blue" }}
								className="nav_link"
								activeClassName="active"
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/users"
								style={{ color: "black" }}
								activeStyle={{ color: "blue" }}
								className="nav_link"
								activeClassName="active"
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="about" element={<About />}></Route>
					<Route path="/" element={<Users />}>
						<Route path=":id" element={<User />} />
						<Route path="user/:id" element={<User />} />
					</Route>
					<Route path="*" element={<Navigate to="*" replace />} />
				</Routes>
			</div>
		</Router>
	);
}
