import React from 'react'
import './MainPage.css'

const MainPage = ({ handleInputChange, inputValue }) => (
  <div>
    <input
      className='MainPage-input'
      type='text'
      value={inputValue}
      onChange={handleInputChange}
   />
  </div>
)

export default MainPage
