import React, { useEffect, useState } from 'react';
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
import AddListModal from '../../containers/AddListModal';

const theme = {
  breakpoint: "1000px",
  brandColor: "#3778c2"
}

function App() {
  const [state, dispatch] = useTodos();
  const [expanded, setExpanded] = useState(false);
  const [addListModal, setAddListModal] = useState(false);
  const switchExpanded = () => setExpanded(!expanded);

  const addList = (list) => {
    dispatch({ type: "ADD_LIST", payload: list })
  }

  const openAddListModal = () => setAddListModal(true);
  const closeAddListModal = () => setAddListModal(false);

  useEffect(() => {
    console.log('app rerendered')
  })

  return <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        {addListModal && <AddListModal close={closeAddListModal} />}
        <ExpandButton expanded={expanded} onClick={switchExpanded} />
        <AppName expanded={expanded}>TodoApp</AppName>
        <Sidebar expanded={expanded}>
          <TodoLists lists={state.data.lists} />
          <AddListButton expanded={expanded} onClick={openAddListModal} />
        </Sidebar>
        <Switch>
          <Content expanded={expanded}>
            <Route to="/:id">
              <TodoListPage />
            </Route>
          </Content>
        </Switch>
      </Router>
    </ThemeProvider>
  </>
}

export default App;
