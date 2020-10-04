import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Modal from '../components/Modal';
import useTodos from '../hooks/useTodos';

const UnstyledFormItem = ({ className, children, id, label, required }) => {
    return <div className={className}>
        {label && (<FormItemLabel for={id}>
            {label}{required && <RequiredIndicator />}
        </FormItemLabel>)}
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

const AddListModal = ({ close, ...props }) => {
    const { addList } = useTodos();
    const [title, setTitle] = useState(null);

    const handleChange = (e) => setTitle(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        addList(title);
        setTitle(null);
        close();
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSubmit(e)
    }

    return (
        <Modal title="Add a new todo list" close={close} {...props}>
            <form onSubmit={handleSubmit}>
                <FormItem id="listtitle" required label="List title">
                    <FormInput onKeyDown={handleKeyDown} value={title} onChange={handleChange} id="listtitle" placeholder="My new list" />
                </FormItem>
                <FormItem>
                    <Button type="submit">Submit</Button>
                </FormItem>
            </form>
        </Modal>
    )
}

export default AddListModal
