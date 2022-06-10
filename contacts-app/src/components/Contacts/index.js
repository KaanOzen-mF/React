import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function Contacts() {
	const [contacts, setContacts] = useState([
		{
			fullname: "Kaan Özen",
			phone_number: "12315613",
		},
		{ fullname: "Yasin Şimşek", phone_number: "48764654" },
	]);

	useEffect(() => {
		console.log(contacts); // we check contacts array every addition, every changing log
	}, [contacts]);

	return (
		<div>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}

export default Contacts;
