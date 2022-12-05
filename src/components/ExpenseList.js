import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {

	const {expenses} = useContext(AppContext);

	return (
		<ul class="list-group">
		{expenses.map((expense) => (
			<ExpenseItem expense={expense} />
		))}
		</ul>
	);
}

export default ExpenseList;