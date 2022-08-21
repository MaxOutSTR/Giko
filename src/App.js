import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import bgRight from '../src/images/landing-bg-right.png'
import './components/styles/main.css'
import * as constants from './constants'
function App() {
  return (
    <div className="App">
      <div className='landing-background'></div>
      <img className='langing-background-right' src={bgRight} alt='bg-right' />
      <NavBar />
      <div className='left-panel'>
        <ItemListContainer
          greetingLines={constants.LANDING_GREETING_LINES}
        />
      </div>
    </div>
  );
}

export default App;
