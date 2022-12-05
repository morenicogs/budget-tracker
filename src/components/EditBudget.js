import { useState } from "react";

function EditBudget({ budget, handleClickSave }) {

	const [value, setValue] = useState(budget);

	return (
		<>
		<input required="required" type="number" className="form-control mr-3" id="name" 
			value={value}
			onChange={(event) => setValue(event.target.value)}
		></input>
		<button className="btn btn-primary" onClick={() => handleClickSave(value)}>Save</button>
		</>
	);
}

export default EditBudget;