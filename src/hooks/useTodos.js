import { useContext, useEffect } from "react"
import { TodosContext } from "../providers/Todos";

export default () => {
	const [state, dispatch] = useContext(TodosContext)
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state));
	}, [state])
	/**
	 * @param {string} title New list title
	 * @param {number} listId Id of a list to put new todo in.
	 */
	const addTodo = (title, listId) => {
		dispatch({ type: "ADD_TODO", payload: { title, listId, id: Date.now() } })
	};

	/**
	 * @param {number} id Id of a todo to toggle completion state
	 */
	const toggleTodo = (id) => {
		dispatch({ type: "TOGGLE_TODO", payload: { id } })
	};

	/**
	 * @param {number} id Id of a todo to remove
	 */
	const removeTodo = (id) => {
		dispatch({ type: "REMOVE_TODO", payload: { id } })
	};

	/**
	 * @param {string} title New list title
	 */
	const addList = (title) => {
		const id = Date.now()
		dispatch({ type: "ADD_LIST", payload: { title, id } })
		return id;
	};

	/**
	 * @param {number} id Id of a list to remove
	 */
	const removeList = (id) => {
		dispatch({ type: "REMOVE_LIST", payload: { id } })
	};

	return {
		lists: state.data.lists,
		todos: state.data.todos,
		addTodo,
		toggleTodo,
		removeTodo,
		addList,
		removeList
	}

}