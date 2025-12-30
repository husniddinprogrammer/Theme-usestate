import './App.css';
import Stories from './components/stories-section/Stories';
import MessagesSection from './components/messages-section/MessagesSection';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { useReducer } from 'react';

export const initialState = {
  theme: "light",
};

export function themeReducer(state, action) {
  switch (action.type) {
    case "light":
      return {
        theme: "dark",
      };
    case "dark":
      return {
        theme: "light",
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  
  return (
    <div className="App">
      <div className='w-25 m-auto row g-0'>
        <Navbar darkTheme={state.theme} dispatch={dispatch} />
        <Stories darkTheme={state.theme}/>
        <MessagesSection darkTheme={state.theme}/>
        <Footer darkTheme={state.theme} />
      </div>
    </div>
  );
}

export default App;
