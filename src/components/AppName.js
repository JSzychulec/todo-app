import styled from "styled-components";

export default styled.h1`
	color: black;
	font-size: 20px;
	font-family: sans-serif;
	font-weight: 400;
	position: absolute;
	z-index: 92;
	margin: 0;
	left: 15px;
	top: 15px;
	transition: 1s;

	@media (max-width: ${props => props.theme.breakpoint}) {
		color: ${props => props.expanded ? 'black' : 'white'};
		left: 55px;
	}

`