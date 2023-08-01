import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, FieldValues} from 'react-hook-form';
import {z} from 'zod';

const schema = z.object({
	description: z.string().min(3, {message: 'Description should atleast be 3 characters long.'}),
	amount: z
		.number({invalid_type_error: 'Amount is required.'})
		.min(0, {message: 'Amount must be 0 or more.'}),
	category: z.string().nonempty({message: 'Category is required.'}),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({onSubmit}: {onSubmit: (data: FieldValues) => void}) => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<FormData>({resolver: zodResolver(schema)});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='my-3'>
				<label htmlFor='description' className='form-label'>
					Description
				</label>
				<input
					{...register('description')}
					type='text'
					id='description'
					className='form-control'
					autoFocus
					autoComplete='off	'
				/>
				{errors.description && <p className='text-danger'>{errors.description.message}</p>}
			</div>
			<div className='my-3'>
				<label htmlFor='amount' className='form-label'>
					Amount
				</label>
				<input
					{...register('amount', {valueAsNumber: true})}
					type='number'
					id='amount'
					className='form-control'
					autoComplete='new-password'
				/>
				{errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
			</div>
			<select className='form-select mt-4 mb-3' {...register('category')}>
				<option value='' selected>
					Select category
				</option>
				<option value='Grocories'>Grocories</option>
				<option value='Utilities'>Utilities</option>
				<option value='Entertainment'>Entertainment</option>
			</select>
			{errors.category && <p className='text-danger'>{errors.category.message}</p>}
			<button type='submit' className='btn btn-primary '>
				Add
			</button>
		</form>
	);
};

export default ExpenseForm;
