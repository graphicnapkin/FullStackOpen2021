import React from 'react'
import { FilterType } from './types'

const Filter = ({ setFilter }: FilterType) => {
  return (
    <div>
      filter show with{' '}
      <input onChange={(e) => setFilter(e.target.value.toLowerCase())} />
    </div>
  )
}

export default Filter
