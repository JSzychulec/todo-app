import styled from 'styled-components';
import React from 'react';
import Icon from './Icon';

/**
 *  @todo Fix outline on focus
*/

const ExpandButton = ({ className, onClick, expanded }) => {
	return (
		<button className={className} onClick={onClick} expanded={expanded}>
			<Icon open expanded={expanded} />
			<Icon close expanded={expanded} />
		</button>
	)
}

export default styled(ExpandButton)`
	position: fixed;
	z-index: 1;
	top: 10px;
	left: 10px;
	background: none;
	border: none;
	display: none;
	cursor: pointer;

	&:focus{
		outline: none;
	}

	@media (max-width: ${props => props.theme.breakpoint}) {
		display: block;
	}

`;