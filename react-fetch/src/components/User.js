import React, { useEffect, useState } from "react";

function User() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users") //first fetch our api
			.then((res) => res.json()) // our api send some response we catch response and convert json
			.then((data) => setUsers(data)) // we set our data to Users
			.catch((e) => console.log(e)) // we catch error if something wrong way
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			<h1>Users</h1>

			{loading && <div>Loading...</div>}
			{users.map((user, i) => (
				<div key={i}>{user.name}</div>
			))}
		</div>
	);
}

export default User;
