/** @format */

import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSignup } from './useSignup';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
	const { signup, isLoading } = useSignup();
	const { register, formState, getValues, handleSubmit, reset } = useForm();
	const { errors } = formState;

	function onSubmit({ fullName, email, password }) {
		signup(
			{ fullName, email, password },
			{
				onSettled: () => reset(),
			}
		);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormRow
				disabled={isLoading}
				label='Full name'
				error={errors?.fullName?.message}>
				<Input
					type='text'
					id='fullName'
					{...register('fullName', { required: 'This field is required' })}
				/>
			</FormRow>

			<FormRow
				disabled={isLoading}
				label='Email address'
				error={errors?.email?.message}>
				<Input
					type='email'
					id='email'
					{...register('email', {
						required: 'This field is required',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'Please provide a valid email',
						},
					})}
				/>
			</FormRow>

			<FormRow
				disabled={isLoading}
				label='Password (min 8 characters)'
				error={errors?.password?.message}>
				<Input
					type='password'
					id='password'
					{...register('password', {
						required: 'This field is required',
						minLength: {
							value: 8,
							message: 'Password needs a minimum of 8 characters',
						},
					})}
				/>
			</FormRow>

			<FormRow
				disabled={isLoading}
				label='Repeat password'
				error={errors?.passwordConfirm?.message}>
				<Input
					type='password'
					id='passwordConfirm'
					{...register('passwordConfirm', {
						required: 'This field is required',
						validate: (value) =>
							value === getValues().password || 'Passwords need to match',
					})}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button
					disabled={isLoading}
					variation='secondary'
					type='reset'
					onClick={reset}>
					Cancel
				</Button>
				<Button disabled={isLoading}>Create new user</Button>
			</FormRow>
		</Form>
	);
}

export default SignupForm;
