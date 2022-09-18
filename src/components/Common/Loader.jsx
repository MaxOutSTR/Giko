import './styles/Loader.css'
import spinner from '../../images/loading-spinner.png'
const Loader = () => {
  return (
    <div className='loader-container' style={{ height: '340px', width: '340px' }}>
      <img className='loader' style={{ height: '240px', width: '240px', marginTop: '-120px', marginLeft: '-120px' }} src={spinner} alt="loading-spinner" />
    </div>
  )
}
export default Loader;