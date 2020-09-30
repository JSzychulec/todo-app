import React from 'react';
import styled from 'styled-components';
import Underlay from './Underlay';

const Modal = ({className, children, onUnderlayClick}) => {

    const handleClick = (e) => e.stopPropagation();

    return <Underlay onClick={onUnderlayClick}>
        <div className={className} onClick={handleClick}>
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
