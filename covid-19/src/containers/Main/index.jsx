import React, { memo, useCallback, useState, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import { ContainerStyled } from './style'
import Panel from './components/Panel'

const Main = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil') 
  const updatedAt = new Date().toLocaleString();
  
  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [country, getCovidData])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <ContainerStyled>
      <div className="md-2">
        <Panel
          data={data}
          updateAt={updatedAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />

    </ContainerStyled>
  )
}

export default memo(Main)