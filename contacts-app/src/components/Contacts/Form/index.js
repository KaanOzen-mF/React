import { useEffect, useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
	const [form, setForm] = useState(initialFormValues);

	useEffect(() => {
		setForm(initialFormValues); //clear form text after submission
	}, [contacts]); // this useEffect working when contacts change

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value }); //firstly we take before form values via "...form" after we must equal target name and target value
	};

	const onSubmit = (e) => {
		e.preventDefault(); //this line prevent re-render after submission

		if (form.fullname === "" || form.phone_number === "") {
			//check for valid entry for every form member
			return false;
		}

		addContact([...contacts, form]); // we collect old object/s
		console.log(form);
	};
	return (
		<div id="container">
			<form onSubmit={onSubmit}>
				<div>
					<input
						name="fullname"
						placeholder="Full Name"
						value={form.fullname}
						onChange={onChangeInput}
					/>
				</div>
				<div>
					<input
						name="phone_number"
						placeholder="Phone Number"
						value={form.phone_number}
						onChange={onChangeInput}
					/>
				</div>
				<div className="btn">
					<button>Add</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
