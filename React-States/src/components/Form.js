import React, { useState } from 'react'

function Form() {

    const[form, setForm] = useState({
        name : "", //Use setState for handle forms
        surname : ""
    })

    const changeForm = (e) => {setForm({...form, [e.target.name]:e.target.value})} //add change event for forms, firstly look input name and change according to that name value

  return (
    <div>
        Name <br />
        <input name="name" value={form.name} onChange={changeForm}/>
        <br />
       
        Surname <br />
        <input name="surname" value={form.surname} onChange={changeForm}/>
        <br />

        {form.name} {form.surname}
    </div>
  )
}

export default Form