import axios from 'axios'

export const getAllCountries = async () => {
	const countries = await axios.get('https://restcountries.eu/rest/v2/all')
	return countries.data
}
