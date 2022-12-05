import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
function ExpenseItem({ expense }) {
	const { id, name, cost } = expense

	const { dispatch } = useContext(AppContext);

	function handleDeleteExpense(){
		dispatch({
			type: "DELETE_EXPENSE",
			payload: id,
		})
	}
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{name}
			<div>
				<span className="badge text-bg-primary rounded-pill mr-3">
					€{cost}
				</span>
				<TiDelete size="1.5em" onClick={() => handleDeleteExpense()}></TiDelete>
			</div>
		</li>
		
	);
}

export default ExpenseItem;