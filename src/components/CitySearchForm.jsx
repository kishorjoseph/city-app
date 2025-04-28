import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {fetchCityCount} from '../features/cityCountSlice'
import { CityCountResult } from './CityCountResult'
import '../App.css'

/* 
  This basic search component calls a Spring Boot backend API by passing a city name and displays the results returned from the API. The total number of city occurrences is calculated on the backend.
*/
export const CitySearchForm = () => {

    const [cityName, setCityName] = useState('');
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch();
   
    /* Initiating the search by dispatching an API call */
    const handleSearch = () => {
    if(validate()) {
        dispatch(fetchCityCount(cityName));
        }
    }

    /* setting city name to local state based on input change */
    const onCityChange = (e) => {
        setCityName(e.target.value)
        setErrors({})
    }

    /* basic validation only enforcing non empty */
    const validate = () => {
        if(cityName && cityName !== '') return true
        setErrors({city: 'City name cannot be empty'})
    }
    
    return(
        <div> 
            <div className='search-box'>
                <label htmlFor='cityname'>City Name</label>
                <div className='search-input'>
                <input type='text' value={cityName} onChange={onCityChange}/>
                {errors.city && 
                    <span style={{color: 'red'}}>{errors.city}</span>
                }
                </div>
            </div>
            <div><input type='button' value="Search" onClick={handleSearch}></input>
            </div>
            <CityCountResult/>
        </div>
    )
}