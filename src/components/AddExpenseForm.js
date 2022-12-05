import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

function AddExpenseForm() {
	
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState("");
	const [cost, setCost] = useState(0);

	function onSubmit(event){
		event.preventDefault();

		const expense = {
			id: uuidv4(),
			name: name,
			cost: cost,
		}

		dispatch({
			type: "ADD_EXPENSE",
			payload: expense 
		});
	}
	return (
		<form onSubmit={onSubmit}>
			<div className="row">
				<div className="col-md mt-3">
					<label htmlFor="name">Name</label>
					<input required="required" type="text" className="form-control" id="name" 
						value={name}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>

				<div className="col-md mt-3">
					<label htmlFor="cost">Cost</label>
					<input required="required" type="number" className="form-control" id="cost"
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					></input>
				</div>

				<div className="col-md mt-3">
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</div>
		</form>
	);
}

export default AddExpenseForm;