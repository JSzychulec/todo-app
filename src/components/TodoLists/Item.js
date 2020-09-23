import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Item = ({ list, className }) => {
	return (
		<li><NavLink className={className} to={`/${list.id}`}>{list.title}</NavLink></li>
	)
}

/**
 * @todo fix outline on focus
 */

export default styled(Item)`
	display: flex;
	align-items: center;
	width: 100%;
	min-height: 40px;
	padding: 15px;
	font-size: 16px;
	font-weight: 500;
	color: black;
	font-family: sans-serif;
	text-decoration: none;
	position: relative;
	display: flex;
	border-left: 3px solid transparent;

	&.active {
			font-weight: 600;
			border-left: 3px solid black;
	}

	&:hover {
			background-color: #ececec;
	}

`;