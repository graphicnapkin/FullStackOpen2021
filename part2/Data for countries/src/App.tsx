import React, { useState } from 'react'
import './App.css'
import { CountryType } from './types'
import SearchBar from './SearchBar'
import Results from './Results'

const App = () => {
	const [search, setSearch] = useState<string>('')
	return (
		<div className="App">
			<SearchBar search={search} handleSearch={setSearch} />
			<Results search={search} />
		</div>
	)
}

export const Country = ({ country }: { country: CountryType }) => {
	return (
		<div>
			<h1>{country.name}</h1>
			<b>capital</b> {country.capital} <br />
			<b>population</b> {country.population} <br />
			<h3>languages</h3>
			<ul>
				{country?.languages?.map((language) => (
					<li key={language.iso639_1}>{language.name}</li>
				)) || null}
			</ul>
			<img src={country.flag} alt="country flag" style={{ width: 250 }} />
		</div>
	)
}

export default App
