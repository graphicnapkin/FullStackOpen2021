import React, { useEffect, useState } from 'react'
import { getAllCountries } from './services/api'
import { CountryType } from './types'
import Country from './Country'
import CountryList from './CountryList'

const Results = ({ search }: { search: string }) => {
	const [countries, setCountries] = useState<CountryType[]>([])
	const [filter, setFilter] = useState<CountryType[]>([])

	useEffect(() => {
		;(async () => {
			if (countries.length === 0) {
				const response = await getAllCountries()
				setCountries(response)
			}
			if (search) {
				setFilter(countries.filter((country) => country.name.match(search)))
			}
		})()
	}, [countries, search])

	if (!search) {
		return <div>Search for a country by name...</div>
	}

	if (filter.length > 10) {
		return <div>Too many matches, specify another filter</div>
	}

	if (filter.length > 1) {
		return <CountryList setFilter={setFilter} countries={filter} />
	}

	if (filter.length === 0) {
		return <div>No countries found</div>
	}

	return <Country country={filter[0]} />
}

export default Results
