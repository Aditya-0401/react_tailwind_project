import React from 'react';
import { LeftNavigation } from './components/LeftNavigation';
import { TopBar } from './components/TopBar';
import { Item } from './components/Item';
import { Recommended } from './components/Recommended';

function App() {
  return (
    <div className="bg-gray-50">
      <LeftNavigation/> 
      <TopBar/>
      <Item/>
      <Recommended/>
    </div>
  );
}

export default App;
