import {useState} from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';

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

	return (
		<div>
			<div className='my-3'>
				<ExpenseFilter onSelect={filter => console.log(filter)} />
			</div>
			<ExpenseList
				expenses={expenses}
				onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}
			/>
		</div>
	);
};

export default App;
