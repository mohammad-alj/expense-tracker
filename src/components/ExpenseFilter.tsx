const ExpenseFilter = () => {
	return (
		<select className='form-select' aria-label='Default select example'>
			<option selected value=''>
				Select category
			</option>
			<option value='Grocories'>Grocories</option>
			<option value='Utilities'>Utilities</option>
			<option value='Entertainment'>Entertainment</option>
		</select>
	);
};

export default ExpenseFilter;
