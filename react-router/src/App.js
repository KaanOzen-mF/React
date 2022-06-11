import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";

import User from "./components/User";

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="about" element={<About />}></Route>
					<Route path="users" element={<Users />}></Route>
					<Route path="user" element={<User />}>
						<Route path=":id" element={<User />} />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}
