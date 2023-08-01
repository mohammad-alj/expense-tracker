const ExpenseList = () => {
	return (
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th>Description</th>
					<th>Amount</th>
					<th>Category</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>milk</td>
					<td>10$</td>
					<td>Grocories</td>
				</tr>
			</tbody>
		</table>
	);
};

export default ExpenseList;
