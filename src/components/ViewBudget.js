function ViewBudget({ budget, handleClickEdit }) {
	return (
		<>
			<span>Budget: {budget}</span>
			<button type="button" className="btn btn-primary" onClick={() => handleClickEdit()}>Edit</button>
		</>
	);
}

export default ViewBudget;