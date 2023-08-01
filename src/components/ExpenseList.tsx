import {Expense} from '../App';

const ExpenseList = ({expenses = []}: {expenses?: Expense[]}) => {
	return (
		expenses.length > 0 && (
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
					{expenses.map(e => (
						<tr key={e.id}>
							<td>{e.description}</td>
							<td>{e.amount}</td>
							<td>{e.category}</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	);
};

export default ExpenseList;
