
/* 
  This is just a list component only to call the public weather API and 
  extract and display only cities from the list. This only to verify whether 
  the city is present or not in the API response itself. 
*/
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherInfo } from '../features/weatherSlice'

export const WeatherDetails = () => {
    /* Extracting the second store slice */
    const { weatherData, loading, error } = useSelector((state) => state.weather)
    const [cities, setCities] = useState([])
    const dispatch = useDispatch();
    const enableCityList = cities.length > 0

    /* Fetching/Dispatching public weather API request */
    const handleSearch = () => {
        dispatch(fetchWeatherInfo())
    }

    /* Just setting the list to local state 
    based on weatherData response promise
    */

    useEffect(() => {
        if(weatherData) {
            const {list = []} = weatherData;
            setCities(list)
        }
    }, [weatherData])


    /* Very small city list component */
    const CityList = () => {
        return(
            <ol>
               {cities.map(v => <li key={v.id}>{v.name || ''}</li>)}
            </ol>
        ) 
    }

    return(
        <div> 
            <div>
                <input type='button' value="Get all Cities" onClick={handleSearch}></input>
            </div>
            <div>
                {enableCityList && <CityList/>}
            </div>
        </div>
    )
}