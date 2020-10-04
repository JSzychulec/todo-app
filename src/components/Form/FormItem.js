import React from 'react';
import styled from 'styled-components';
import FormLabel from './FormLabel';
import FormRequiredIndicator from './FormRequiredIndicator';

const FormItem = ({ className, children, id, label, required }) => {
	return <div className={className}>
		{label && (<FormLabel for={id}>
			{label}{required && <FormRequiredIndicator />}
		</FormLabel>)}
		{children}
	</div>
}

export default styled(FormItem)`
	display: flex;
	flex-direction: column;
	align-items: baseline;
`;