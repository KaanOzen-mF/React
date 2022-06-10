import React, { useState } from "react";
import "../styles.css";
function List({ contacts }) {
	const [filterText, setFilterText] = useState("");

	const filtered = contacts.filter((item) => {
		// filter methods return item of contacts array
		return Object.keys(item).some((key) =>
			item[key] // item return keys -> "fullname" and "phone_number"
				.toString()
				.toLowerCase()
				.includes(filterText.toLocaleLowerCase())
		);
	});

	console.log("filtered", filtered);

	return (
		<div id="container">
			<input
				placeholder="Filter Content"
				value={filterText}
				onChange={(e) => setFilterText(e.target.value)}
			/>

			<ul className="list">
				{filtered.map((contact, i) => (
					<li key={i}>
						<span>{contact.fullname}</span>
						<span>{contact.phone_number}</span>
					</li>
				))}
			</ul>

			<p>Total Contacts({filtered.length})</p>
		</div>
	);
}

export default List;
