import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import AppName from '../../components/AppName';
import ExpandButton from '../../components/ExpandButton';
import GlobalStyle from '../../components/GlobalStyle';
import Sidebar from '../../components/Sidebar';

const theme = {
  breakpoint: "1000px",
}

function App() {
  const [expanded, setExpanded] = useState(false);
  const switchExpanded = () => setExpanded(!expanded);

  return <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ExpandButton expanded={expanded} onClick={switchExpanded} />
      <AppName expanded={expanded}>TodoApp</AppName>
      <Sidebar expanded={expanded} />
    </ThemeProvider>
  </>
}

export default App;
