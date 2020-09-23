import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppName from '../../components/AppName';
import ExpandButton from '../../components/ExpandButton';
import GlobalStyle from '../../components/GlobalStyle';
import Sidebar from '../../components/Sidebar';
import TodoLists from '../../components/TodoLists';
import useTodos from '../../hooks/useTodos';

const theme = {
  breakpoint: "1000px",
}

function App() {
  const [state, dispatch] = useTodos();
  const [expanded, setExpanded] = useState(false);
  const switchExpanded = () => setExpanded(!expanded);

  const addList = (list) => {
    dispatch({ type: "ADD_LIST", payload: list })
  }

  return <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <ExpandButton expanded={expanded} onClick={switchExpanded} />
        <AppName expanded={expanded}>TodoApp</AppName>
        <Sidebar expanded={expanded}>
          <TodoLists lists={state.data.lists} />
        </Sidebar>
      </Router>
    </ThemeProvider>
  </>
}

export default App;
