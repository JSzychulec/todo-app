import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Redirect, useParams } from 'react-router-dom';
import useTodos from '../../hooks/useTodos';
import deleteIcon from '../../assets/delete_forever-24px.svg';
import RemoveListModal from '../RemoveListModal';

const UnstyledHeader = ({ className, title, onRemoveListClick }) => {
	return <header className={className}>
		<div>
			<div></div>
			<div></div>
		</div>
		<div>
			<div><HeaderListTitle>{title}</HeaderListTitle><RemoveListButton onClick={onRemoveListClick} /></div>
			<div></div>
		</div>
	</header>
}

const Header = styled(UnstyledHeader)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-image: url("${props => props.image}"), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
	background-blend-mode: overlay;
	height: 250px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 15px;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	& > div > div {
		display: inline-flex;
		align-items: center;
	}

`;

const UnstyledRemoveListButton = ({ className, onClick }) => {
	return <button onClick={onClick} className={className}><img src={deleteIcon}></img></button>
}

const RemoveListButton = styled(UnstyledRemoveListButton)`
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;
	display: inline-flex;
  justify-content: center;
  align-items: center;
	margin-left: 10px;
	margin-bottom: -2px;

	& img {
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	& img:hover {
		opacity: 1;
	}

`;

const HeaderListTitle = styled.h1`
	display: inline;
	font-family: sans-serif;
	color: #eeeeee;
	text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
	margin: 0;

`;

const TodoListPage = ({ className }) => {
	let { todos, lists } = useTodos();
	const { id } = useParams();
	const [removeListModal, setRemoveListModal] = useState(false);

	const openRemoveListModal = () => setRemoveListModal(true);
	const closeRemoveListModal = () => setRemoveListModal(false);

	const currentList = lists.filter((list) => list.id === parseInt(id))[0];
	const items = todos.filter((todo) => {
		return todo.list === parseInt(id)
	})

	return (<>
		{!currentList && <Redirect to="/" />}
		{removeListModal && <RemoveListModal listId={currentList?.id} close={closeRemoveListModal} />}
		<Header onRemoveListClick={openRemoveListModal} image={currentList?.image} title={currentList?.title} />
		<div className={className}>
			{items.map(item => <div>{item.title}</div>)}
		</div>
	</>
	)
}

export default TodoListPage;
