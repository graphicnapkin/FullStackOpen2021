import React, { useEffect, useState } from 'react'
import { getAllCountries } from './services/api'
import { CountryType } from './types'
import { Country } from './App'

const Results = ({ search }: { search: string }) => {
	const [countries, setCountries] = useState<CountryType[]>([])

	useEffect(() => {
		;(async () => {
			if (countries.length === 0) {
				const response = await getAllCountries()
				setCountries(response)
			}
		})()
	}, [countries])

	const filteredCountries: CountryType[] = countries.filter((country) =>
		country.name.match(search)
	)
	if (!search) return <div>Search for a country by name...</div>
	if (filteredCountries.length > 10)
		return <div>Too many matches, specify another filter</div>

	if (filteredCountries.length > 1)
		return (
			<div>
				{filteredCountries.map((country) => (
					<div key={country.alpha2Code}>{country.name}</div>
				))}
			</div>
		)
	if (filteredCountries.length === 0) return <div>No countries found</div>
	return <Country country={filteredCountries[0]} />
}

export default Results
