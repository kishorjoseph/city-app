
import React from "react"
import { useSelector } from "react-redux"

/* 
  Component to display the city count result
*/
export const CityCountResult = () => {
    const { city = {}, loading, error } = useSelector((state) => state.city)
    return(
        city ? <div>
        {loading && 
            <div>Counting cities...</div>}
            {error && <div>Error: {error}</div>}
            <div>City count result: {city.count}</div>
        </div> : null)
}