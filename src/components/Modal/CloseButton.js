import React from 'react';
import styled from 'styled-components';
import closeIcon from '../../assets/close-24px.svg';

const CloseButton = ({ ...props }) => {
	return (
		<img alt="" src={closeIcon} {...props}></img>
	)
}

export default styled(CloseButton)`
	cursor: pointer;
	transition: 0.2s;
	&:hover {
		background: rgba(0, 0, 0, 0.1);
	}
`;
