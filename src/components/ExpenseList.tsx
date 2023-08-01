import {Expense} from '../App';

interface Props {
	expenses: Expense[];
	onDelete: (id: number) => void;
	filter: 'All' | 'Grocories' | 'Utilities' | 'Entertainment';
}

const ExpenseList = ({expenses, onDelete, filter}: Props) => {
	const filteredExpenes =
		filter === 'All' ? expenses : expenses.filter(e => e.category === filter);

	const shownExpenses = filteredExpenes.map(e => (
		<tr key={e.id}>
			<td>{e.description}</td>
			<td>${e.amount}</td>
			<td>{e.category}</td>
			<td>
				<button className='btn btn-outline-danger' onClick={() => onDelete(e.id)}>
					Remove
				</button>
			</td>
		</tr>
	));

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
				<tbody>{shownExpenses}</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td>${filteredExpenes.reduce((a, expense) => expense.amount + a, 0)}</td>
					</tr>
				</tfoot>
			</table>
		)
	);
};

export default ExpenseList;
