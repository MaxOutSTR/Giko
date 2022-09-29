import './styles/dropDown.css'
import { Link } from 'react-router-dom'
const Dropdown = ({ label, options, drop, setDrop }) => {

  return (
    <div className={'dropdown-container'}>
      <div style={{ position: 'relative' }}>
        <div>
          {label}
        </div>
        {(drop) ?
          <div className='dropdown-options-container'>
            <ul style={{ margin: '0', padding: '0', listStyleType: 'none' }} onMouseLeave={(e) => { setDrop(false) }}>
              {
                options.map((option) => {
                  return (
                    <Link key={option.id} to={`/category/${option.id}`} style={{ textDecoration: 'none' }} onClick={() => { setDrop(false) }}>
                      <li className='dropdown-option'>
                        {option.name}
                      </li>
                    </Link>
                  )
                })
              }
            </ul>
          </div>
          :
          <></>}

      </div>
    </div>
  )
}
export default Dropdown;