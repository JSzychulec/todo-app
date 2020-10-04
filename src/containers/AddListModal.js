import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Modal from '../components/Modal';
import useTodos from '../hooks/useTodos';

const UnstyledFormItem = ({ className, children, id, label, required }) => {
    return <div className={className}>
        {label && <FormItemLabel for={id}>{label}{required && <RequiredIndicator />}</FormItemLabel>}

        {children}
    </div>
}

const FormItem = styled(UnstyledFormItem)`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;

const FormInput = styled.input`
    padding: 3px;
    font-size: 15px;
    margin-bottom: 20px;
`;

const FormItemLabel = styled.label`
    font-family: sans-serif;
    margin-bottom: 5px;
`;

const UnstyledRequiredIndicator = ({ className }) => <span className={className}>*</span>
const RequiredIndicator = styled(UnstyledRequiredIndicator)`
    color: red;
    margin-left: 5px;
`;

const AddListModal = ({ ...props }) => {
    const [state, dispatch] = useTodos();
    const [name, setName] = useState(null);

    const handleChange = (e) => setName(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_LIST", payload: { title: name, id: Date.now() } })
    }

    useEffect(() => {
        console.log('state changed')
    }, [state])

    return (
        <Modal title="Add a new todo list" {...props}>

            <form onSubmit={handleSubmit}>
                <FormItem id="listname" required label="List name">
                    <FormInput value={name} onChange={handleChange} id="listname" placeholder="My new list" />
                </FormItem>
                <FormItem>
                    <Button type="submit">Submit</Button>
                </FormItem>
            </form>
        </Modal>
    )
}

export default AddListModal
