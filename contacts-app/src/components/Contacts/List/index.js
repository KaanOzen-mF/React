import React from "react";

function List({ contacts }) {
	return (
		<div>
			<input placeholder="Filter Content" />
			<ul>
				{contacts.map((contact, i) => (
					<li key={i}>{contact.fullname}</li>
				))}
			</ul>
		</div>
	);
}

export default List;
