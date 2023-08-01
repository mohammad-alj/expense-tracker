import {Expense} from '../App';

interface Props {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({expenses = [], onDelete}: Props) => {
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
							<td>
								<button
									className='btn btn-outline-danger'
									onClick={() => onDelete(e.id)}
								>
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	);
};

export default ExpenseList;
