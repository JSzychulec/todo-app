import TodosReducer from "../reducers/todos";
import React, { createContext, useReducer } from "react";

const getDefaultState = () => JSON.parse(localStorage.getItem('todos')) || {
	data: {
		lists: [
			{
				id: 0,
				title: 'My list',
			}
		],
		todos: [
			{
				id: 0,
				title: 'Example todo',
				completed: false,
				list: 0
			}
		]
	}
};

export const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TodosReducer, getDefaultState());

	return <TodosContext.Provider value={[state, dispatch]}>
		{children}
	</TodosContext.Provider>
}