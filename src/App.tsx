import {useState} from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

export interface Expense {
	id: number;
	description: string;
	amount: number;
	category: 'Grocories' | 'Utilities' | 'Entertainment';
}

const App = () => {
	const [expenses, setExpenses] = useState<Expense[]>([
		{description: 'milk', amount: 10, category: 'Grocories', id: 0},
		{description: 'ps4', amount: 399, category: 'Entertainment', id: 1},
		{description: 'cheese', amount: 10, category: 'Grocories', id: 3},
	]);

	const [expenseFilter, setExpenseFilter] = useState<
		'Grocories' | 'Utilities' | 'Entertainment' | 'All'
	>('All');

	return (
		<div>
			<div className='mb-5'>
				<ExpenseForm onSubmit={data => console.log(data)} />
			</div>
			<div className='my-3'>
				<ExpenseFilter
					onSelect={filter =>
						setExpenseFilter(
							filter as 'Grocories' | 'Utilities' | 'Entertainment' | 'All',
						)
					}
				/>
			</div>
			<ExpenseList
				expenses={expenses}
				onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}
				filter={expenseFilter}
			/>
		</div>
	);
};

export default App;
