import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ExpenseTotal() {

	const { expenses } = useContext(AppContext)

	function getTotalExpenses(){
		let total = 0;
		for (let i = 0; i < expenses.length; i++) {
			total = total + Number(expenses[i].cost);
		}
		return total;
	}

	const totalExpenses = getTotalExpenses();
	
	return (
		<div className="alert alert-primary">
			<span>Spent so far: {totalExpenses}</span>
		</div>	);
}

export default ExpenseTotal;