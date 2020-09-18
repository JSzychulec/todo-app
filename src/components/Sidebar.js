import styled from 'styled-components';

export default styled.aside`
	height: 100%;
	width: 250px;
	max-width: calc(100% - 25px);
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
	background: white;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	opacity: 1;
	transition: 1s;

	@media (max-width: 600px) {
		box-shadow: ${props => !props.expanded && 'none'};
		transform: ${props => !props.expanded && 'translateX(-100%)'}
	}

`;