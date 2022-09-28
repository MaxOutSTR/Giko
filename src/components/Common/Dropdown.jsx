import './styles/dropDown.css'
import { Link } from 'react-router-dom'
const Dropdown = ({ label, options, drop }) => {

  return (
    <div className={'dropdown-container'}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div>
          {label}
        </div>
        {(drop) ?
          <div className='dropdown-options-container'>
            <ul style={{ margin: '0', padding: '0', listStyleType: 'none' }}>
              {
                options.map((option) => {
                  return (
                    <Link key={option.id} to={`/category/${option.id}`} style={{ textDecoration: 'none' }} onClick={() => { drop = false }}>
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
      {(!drop) ?
        <></>
        :
        <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0' }} onClick={() => { drop = false }}>
        </div>}
    </div>
  )
}
export default Dropdown;