import './App.css';
import Stories from './components/stories-section/Stories';
import MessagesSection from './components/messages-section/MessagesSection';
import Footer from './components/footer/Footer';
import React from 'react';
import Navbar from './components/navbar/Navbar';

function App() {
  const [darkTheme, setDarkTheme] = React.useState(false);
  return (
    <div className="App">
      <div className='w-25 m-auto row g-0'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Stories darkTheme={darkTheme}/>
        <MessagesSection darkTheme={darkTheme}/>
        <Footer darkTheme={darkTheme} />
      </div>
    </div>
  );
}

export default App;
