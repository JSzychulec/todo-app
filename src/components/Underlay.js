import styled from 'styled-components'

export default styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	z-index: ${props => props.zIndex || 9999999};
	display: flex;
	justify-content: center;
	align-items: baseline;
	padding: 20px;
`;