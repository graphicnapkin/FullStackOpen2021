import React from 'react'
import { CountryType } from './types'

const Country = ({ country }: { country: CountryType }) => {
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

export default Country