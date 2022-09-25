import './styles/Loader.css'
import spinner from '../../images/loading-spinner.png'
const Loader = () => {
  return (
    <div className='loader-container'>
      <img className='loader' src={spinner} alt="loading-spinner" />
    </div>
  )
}
export default Loader;