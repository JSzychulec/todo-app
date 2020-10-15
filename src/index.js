import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import { TodosProvider } from './providers/Todos';

ReactDOM.render(
	<React.StrictMode>
		<TodosProvider>
			<App />
		</TodosProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
