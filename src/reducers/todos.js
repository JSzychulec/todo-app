export default (state, action) => {
	switch (action.type) {
		case "ADD_TODO":

			if (!action.payload.title) return state; // Todo doesn't have title.
			if (typeof action.payload.title !== 'string') return state; // Todo's title isn't a String.
			if (!action.payload.id) return state; // Todo doesn't have id.
			if (typeof action.payload.id !== 'number') return state; // Todo's id isn't a Number.
			if (state.data.todos.filter(({ id }) => id === action.payload.id).length > 0) return state; // Todo with this id already exists.
			if (!action.payload.list) return state; // Todo doesn't have a list it belongs to.
			if (typeof action.payload.list !== 'number') return state; // Todo's list isn't a Number (which it has to be since it's just an id pointer to a list).
			/** @todo validate title - ensure it contains at least one alphanumeric character */

			let newTodo = {
				id: action.payload.id,
				title: action.payload.title.trim(),
				list: action.payload.list,
				completed: false,
			};

			return {
				...state,
				data: {
					...state.data,
					todos: [...state.data.todos, { ...newTodo }]
				}
			};

		case "TOGGLE_TODO":
			return {
				...state,
				data: {
					...state.data,
					todos: state.data.todos.map((todo) => {
						if (todo.id === action.payload) return { ...todo, completed: !todo.completed }
						return todo;
					})
				}
			};

		case "REMOVE_TODO":
			return {
				...state,
				data: {
					...state.data,
					todos: state.data.todos.filter((todo) => todo.id !== action.payload)
				}
			};

		case "ADD_LIST":
			let newList = {
				id: action.payload.id,
				title: action.payload.title,
			};

			return {
				...state,
				data: {
					...state.data,
					lists: [...state.data.lists, { ...newList }]
				}
			};

		case "REMOVE_LIST":
			return {
				...state,
				data: {
					...state.data,
					todos: state.data.todos.filter((todo) => todo.list !== action.payload),
					lists: state.data.lists.filter((list) => list.id !== action.payload)
				}
			};

		default:
			return state;
	}
}