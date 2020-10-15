import styled from 'styled-components';

export default styled.main`
	margin-left: 250px;
	transition: 1s;
		
	@media (max-width: ${props => props.theme.breakpoint}){
		margin-left: ${props => props.expanded ? '250px' : '0px'};
	}

`;