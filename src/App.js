import React from 'react';
// import { Counter } from './features/counter/Counter';
import Header from '../src/components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
function App() {
  return (
    <div className="app_wrapper">
        <Header/>
        <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widget/>
        </div>
    </div>
  );
}

export default App;
