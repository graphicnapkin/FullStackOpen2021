export interface CountryType {
	name: string
	topLevelDomain?: string[] | null
	alpha2Code: string
	alpha3Code: string
	callingCodes?: string[] | null
	capital: string
	altSpellings?: string[] | null
	region: string
	subregion: string
	population: number
	latlng?: number[] | null
	demonym: string
	area: number
	gini: number
	timezones?: string[] | null
	borders?: string[] | null
	nativeName: string
	numericCode: string
	currencies?: CurrenciesEntity[] | null
	languages?: LanguagesEntity[] | null
	translations: Translations
	flag: string
	regionalBlocs?: RegionalBlocsEntity[] | null
	cioc: string
}
export interface CurrenciesEntity {
	code: string
	name: string
	symbol: string
}
export interface LanguagesEntity {
	iso639_1: string
	iso639_2: string
	name: string
	nativeName: string
}
export interface Translations {
	de: string
	es: string
	fr: string
	ja: string
	it: string
	br: string
	pt: string
}
export interface RegionalBlocsEntity {
	acronym: string
	name: string
	otherAcronyms?: (string | null)[] | null
	otherNames?: string[] | null
}

export interface SearchProps {
	handleSearch: React.Dispatch<React.SetStateAction<string>>
	search: string
}

export interface CountryListProps {
	countries: CountryType[]
	setFilter: React.Dispatch<React.SetStateAction<CountryType[]>>
}

export interface Weather {
	request: Request
	location: Location
	current: Current
}
export interface Request {
	type: string
	query: string
	language: string
	unit: string
}
export interface Location {
	name: string
	country: string
	region: string
	lat: string
	lon: string
	timezone_id: string
	localtime: string
	localtime_epoch: number
	utc_offset: string
}
export interface Current {
	observation_time: string
	temperature: number
	weather_code: number
	weather_icons?: string[] | null
	weather_descriptions?: string[] | null
	wind_speed: number
	wind_degree: number
	wind_dir: string
	pressure: number
	precip: number
	humidity: number
	cloudcover: number
	feelslike: number
	uv_index: number
	visibility: number
}
