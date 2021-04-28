import React from 'react'
import { FilterProps } from '../types'

const Filter = ({ setFilter }: FilterProps) => {
  return (
    <div>
      filter show with{' '}
      <input onChange={(e) => setFilter(e.target.value.toLowerCase())} />
    </div>
  )
}

export default Filter
