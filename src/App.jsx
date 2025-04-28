import React from 'react'
import './App.css'
import { CitySearchForm } from './components/CitySearchForm'
import {WeatherDetails } from './components/WeatherDetails'

function App() {

  return (
    <div>
      <h2>City count search</h2>
    <div className='parent'>
    <CitySearchForm className='child'/>
    <div className='divider'/>
    <WeatherDetails className='child'/>
    </div>
    </div>
  )
}

export default App
