import React, { useState } from 'react';
import ExpandButton from '../../components/ExpandButton';
import GlobalStyle from '../../components/GlobalStyle';
import Sidebar from '../../components/Sidebar';

function App() {
  const [expanded, setExpanded] = useState(false);
  const switchExpanded = () => setExpanded(!expanded);

  return <>
    <GlobalStyle />
    <ExpandButton expanded={expanded} onClick={switchExpanded} />
    <Sidebar expanded={expanded} />
  </>
}

export default App;
