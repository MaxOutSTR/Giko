import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import bgRight from '../src/images/landing-bg-right.png'
import './styles/main.css'
import * as constants from './constants'
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='main-page'>
        <div className='left-panel'>
          <ItemListContainer
            greetingLines={constants.LANDING_GREETING_LINES}
          />
        </div>
        <div className='right-panel'>
          <img className='langing-background-right' src={bgRight} alt='bg-right' />
        </div>
      </div>
    </div>
  );
}

export default App;
