const ExpenseForm = () => {
	return (
		<form>
			<div className='my-3'>
				<label htmlFor='name' className='form-label'>
					Description
				</label>
				<input
					type='text'
					id='name'
					className='form-control'
					autoFocus
					autoComplete='new-password'
				/>
			</div>
			<div className='my-3'>
				<label htmlFor='amount' className='form-label'>
					Amount
				</label>
				<input
					type='number'
					id='amount'
					className='form-control'
					autoComplete='new-password'
				/>
			</div>
			<select className='form-select mt-4 mb-3'>
				<option value='' selected>
					Select category
				</option>
				<option value='Grocories'>Grocories</option>
				<option value='Utilities'>Utilities</option>
				<option value='Entertainment'>Entertainment</option>
			</select>
			<button type='submit' className='btn btn-primary '>
				Add
			</button>
		</form>
	);
};

export default ExpenseForm;
