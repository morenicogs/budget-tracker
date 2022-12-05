import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

function Budget() {

	const { budget, dispatch } = useContext(AppContext)
	const [isEditing, setIsEditing] = useState(false);

	function handleClickEdit(){
		setIsEditing(true);
	}
	function handleClickSave(value){
		dispatch({
			type: "SET_BUDGET",
			payload: value
		});
		setIsEditing(false);
	}

	return (
		<div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
			{isEditing ? (
				<EditBudget budget={budget} handleClickSave={handleClickSave}/>
			) : (
			<ViewBudget budget={budget} handleClickEdit={handleClickEdit} />
			)}
		</div>
	);
}

export default Budget;