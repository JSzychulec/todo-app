import styled from 'styled-components';

export default styled.button`
	border: none;
	background: ${props => props.theme.brandColor};
	border: 2px solid transparent;			
	color: white;
	padding: 4px;
	border-radius: 5px;
	cursor: pointer;
	font-family: sans-serif;
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
	text-transform: uppercase;

	&:hover {
		background: transparent;
		border: 2px solid ${props => props.theme.brandColor};
		color: ${props => props.theme.brandColor};
	}

`;