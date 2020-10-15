import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const AddListButton = ({ className, onClick }) => <Button onClick={onClick} className={className}>add list</Button>

export default styled(AddListButton)`
	position: absolute;
	top: 11px;
	right: 15px;
	transition: opacity 0.3s 1s;

	@media (max-width: ${props => props.theme.breakpoint}) {
		opacity: ${props => props.expanded ? 1 : 0};
		pointer-events: ${props => props.expanded ? 'inherit' : 'none'};
		transition: opacity ${props => props.expanded ? '0.3s 1s' : '0.3s 0s'};
	}
`;
