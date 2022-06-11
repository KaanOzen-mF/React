import { Link, Outlet, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import User from "./User";

function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios("https://jsonplaceholder.typicode.com/users").then((res) =>
			setUsers(res.data)
		);
	}, []);

	return (
		<div>
			<h1>Users Detail</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<Link to={`/user/${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ul>
			<h1>Please Select a User</h1>

			<Routes>
				<Route path="user" element={<User />}>
					<Route path=":id" element={<User />} />
				</Route>
			</Routes>
		</div>
	);
}

export default Users;
