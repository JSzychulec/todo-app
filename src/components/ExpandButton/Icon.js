import React from 'react';
import styled from 'styled-components';


import menuIcon from '../../assets/menu-24px.svg';
import closeIcon from '../../assets/close-24px.svg';

const Icon = ({ className, expanded, close, open }) => {
	return <img className={className} src={open ? menuIcon : close ? closeIcon : null} />
}

export default styled(Icon)`


width: 30px;

opacity: ${props => (props.expanded && props.close) || (!props.expanded && props.open) ? 1 : 0};
transition: 1s;
position: absolute;

`;