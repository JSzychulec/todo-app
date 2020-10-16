import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppName from '../../components/AppName';
import ExpandButton from '../../components/ExpandButton';
import GlobalStyle from '../../components/GlobalStyle';
import Sidebar from '../../components/Sidebar';
import TodoLists from '../../components/TodoLists';
import useTodos from '../../hooks/useTodos';
import Content from '../../components/Content';
import TodoListPage from '../TodoListPage';
import AddListButton from '../../components/AddListButton';
import AddListModal from '../AddListModal';
import Underlay from '../../components/Underlay';

const theme = {
	breakpoint: "800px",
	brandColor: "#3778c2"
}

function App() {
	const { lists } = useTodos();
	const [expanded, setExpanded] = useState(false);
	const [addListModal, setAddListModal] = useState(false);

	const switchExpanded = () => setExpanded(!expanded);
	const retract = () => setExpanded(false);
	const openAddListModal = () => setAddListModal(true);
	const closeAddListModal = () => setAddListModal(false);

	return <>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				{addListModal && <AddListModal close={closeAddListModal} />}
				{expanded && <Underlay onMouseDown={retract} zIndex={50} />}
				<ExpandButton expanded={expanded} onClick={switchExpanded} />
				<AppName expanded={expanded}>TodoApp</AppName>
				<Sidebar expanded={expanded}>
					<TodoLists lists={lists} />
					<AddListButton expanded={expanded} onClick={openAddListModal} />
				</Sidebar>
				<Switch>
					<Content expanded={expanded}>
						<Route path="/:id">
							<TodoListPage />
						</Route>
					</Content>
				</Switch>
			</Router>
		</ThemeProvider>
	</>
}

export default App;
