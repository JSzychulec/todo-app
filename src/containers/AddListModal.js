import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../components/Button';
import FormInput from '../components/Form/FormInput';
import FormItem from '../components/Form/FormItem';
import Modal from '../components/Modal';
import useTodos from '../hooks/useTodos';

const AddListModal = ({ close, ...props }) => {
    const { addList } = useTodos();
    const [title, setTitle] = useState("");
    const [newListId, setNewListId] = useState(null);

    const handleChange = (e) => setTitle(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const listId = await addList(title);
        setNewListId(listId)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSubmit(e)
    }

    useEffect(() => {
        if (newListId) close();
    }, [newListId])



    return (
        <Modal title="Add a new todo list" close={close} {...props}>
            {newListId && <Redirect to={`/${newListId}`}></Redirect>}
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
