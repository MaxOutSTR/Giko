import './styles/dropDown.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Dropdown = ({ label, options, drop }) => {

  return (
    <div style={{ position: 'relative' }}>
      <div>
        {label}
      </div>
      {(drop) ?
        <div className='dropdown-options-container'>
          <ul style={{ margin: '0', padding: '0', listStyleType: 'none' }}>
            {
              options.map((option) => {
                return (
                  <Link to={`/category/${option.id}`} style={{ textDecoration: 'none' }} onClick={() => { drop = false }}>
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
  )
}
export default Dropdown;