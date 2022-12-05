import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Remaining() {
	
	const { expenses, budget } = useContext(AppContext)

	function getTotalExpenses(){
		let total = 0;
		for (let i = 0; i < expenses.length; i++) {
			total = total + Number(expenses[i].cost);
		}
		return total;
	}

	const totalExpenses = getTotalExpenses();

	const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: {budget - totalExpenses}</span>
		</div>
	);
}

export default Remaining;