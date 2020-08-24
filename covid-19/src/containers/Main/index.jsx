import React, { memo, useCallback, useState, useEffect } from 'react'
import Api from '../../api'

const Main = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil') 
  
  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [country, getCovidData])

  return (
    <div>
      tet
    </div>
  )
}

export default memo(Main)