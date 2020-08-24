import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

const Board = ({ data }) => {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total cases" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Today deaths" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Today cases" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Tot deaths" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Tot recovered" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)