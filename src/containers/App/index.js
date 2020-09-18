import React, { useState } from 'react';
import AppName from '../../components/AppName';
import ExpandButton from '../../components/ExpandButton';
import GlobalStyle from '../../components/GlobalStyle';
import Sidebar from '../../components/Sidebar';

function App() {
  const [expanded, setExpanded] = useState(false);
  const switchExpanded = () => setExpanded(!expanded);

  return <>
    <GlobalStyle />
    <ExpandButton expanded={expanded} onClick={switchExpanded} />
    <AppName expanded={expanded}>TodoApp</AppName>
    <Sidebar expanded={expanded} />
  </>
}

export default App;
