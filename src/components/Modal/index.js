import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import Header from './Header';
import Title from './Title';
import Underlay from './Underlay';

const Modal = ({ className, children, close, title }) => {
	const stopPropagation = (e) => e.stopPropagation();
	return <Underlay onMouseDown={close}>
		<div className={className} onMouseDown={stopPropagation} onClick={stopPropagation}>
			<Header>
				<Title>{title}</Title>
				<CloseButton onClick={close}></CloseButton>
			</Header>
			{children}
		</div>
	</Underlay>
}

export default styled(Modal)`
	padding: 15px;
	background: white;
	width: 500px; 
	max-width: 100%
`;
