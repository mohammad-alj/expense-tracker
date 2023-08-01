const ExpenseFilter = ({
	onSelect,
}: {
	onSelect: (category: 'Grocories' | 'Utilities' | 'Entertainment' | 'All' | string) => void;
}) => {
	return (
		<select
			className='form-select'
			aria-label='Default select example'
			onChange={event => onSelect(event.target.value)}
		>
			<option selected value='All'>
				Select category
			</option>
			<option value='Grocories'>Grocories</option>
			<option value='Utilities'>Utilities</option>
			<option value='Entertainment'>Entertainment</option>
		</select>
	);
};

export default ExpenseFilter;
