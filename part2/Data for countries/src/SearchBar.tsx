import React from 'react'
import { SearchProps } from './types'

const SearchBar = ({ handleSearch, search }: SearchProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleSearch(event.target.value)
	}
	return (
		<div style={{ paddingBottom: 20 }}>
			find countries{' '}
			<input type="text" value={search} onChange={handleChange}></input>
		</div>
	)
}

export default SearchBar
