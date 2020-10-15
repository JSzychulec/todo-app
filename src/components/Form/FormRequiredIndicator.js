import React from 'react';
import styled from 'styled-components';

const RequiredIndicator = ({ className }) => <span className={className}>*</span>

export default styled(RequiredIndicator)`
	color: red;
	margin-left: 5px;
`;