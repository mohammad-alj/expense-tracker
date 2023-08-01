import ExpenseList from './components/ExpenseList';

export interface Expense {
	id: number;
	description: string;
	amount: number;
	category: 'Grocories' | 'Utilities' | 'Entertainment';
}

const App = () => {
	const expenses: Expense[] = [];
	function addExpense(
		description: string,
		amount: number,
		category: 'Grocories' | 'Utilities' | 'Entertainment',
	) {
		expenses.push({description, amount, category, id: expenses.length});
	}

	addExpense('Milk', 10, 'Grocories');
	addExpense('Milk', 10, 'Grocories');
	return (
		<div>
			<ExpenseList expenses={expenses} />
		</div>
	);
};

export default App;
