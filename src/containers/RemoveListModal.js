import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../components/Button';
import FormItem from '../components/Form/FormItem';
import Modal from '../components/Modal';
import P from '../components/P';
import useTodos from '../hooks/useTodos';

const RemoveListModal = ({ close, listId, ...props }) => {
	const { removeList } = useTodos();
	const [listRemoved, setListRemoved] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		removeList(listId);
		setListRemoved(true);
	}

	const handleKeyDown = (e) => {
		console.log('lelelel')
		if (e.key === 'Enter') handleSubmit(e)
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		console.log('hello')
		return () => {
			console.log('return')
			document.removeEventListener('keydown', handleKeyDown)
		}
	})

	return (
		<Modal title="Remove list" close={close} {...props}>
			{listRemoved && <Redirect to={`/`}></Redirect>}
			<form onSubmit={handleSubmit}>
				<P>This action can not be undone</P>
				<FormItem>
					<Button red type="submit">Remove</Button>
				</FormItem>
			</form>
		</Modal>
	)
}

export default RemoveListModal
