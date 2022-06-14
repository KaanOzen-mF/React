import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

function User() {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	const { id } = useParams();
	useEffect(() => {
		axios(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => setUser(res.data))
			.finally(() => setLoading(false));
	}, [id]);
	return (
		<div>
			<h1>User Detail</h1>
			{loading && <p>Loading...</p>}
			{!loading && <code>{JSON.stringify(user)}</code>}
			<br />
			<br />
			<button>
				<Link to={`/user/${parseInt(id) + 1}`}>
					{" "}
					Next User ({parseInt(id) + 1})
				</Link>
			</button>
		</div>
	);
}

export default User;
