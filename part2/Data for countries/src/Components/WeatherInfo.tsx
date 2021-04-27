import React, { useEffect, useState } from 'react'
import { CancelTokenSource } from 'axios'
import { Weather } from '../types'
import { getCityWeather } from '../services/api'

export const WeatherInfo = ({ capital }: { capital: string }) => {
	const [weather, setWeather] = useState<Weather | null>(null)
	const [cancelApi, setCancelApi] = useState<CancelTokenSource | null>(null)
	useEffect(() => {
		;(async () => {
			if (!weather && capital) {
				const response = await getCityWeather(capital)
				setWeather(response.data)
				setCancelApi(response.cancel)
			}
		})()
		return () => {
			cancelApi?.cancel()
		}
	}, [weather, capital, cancelApi])
	if (!weather) return null
	return (
		<>
			<h3>Weather in {capital}</h3>
			<b>temperature: </b>
			{weather.current.temperature}
			<br />
			{weather.current.weather_icons && (
				<img alt="weather icon" src={weather.current.weather_icons[0]} />
			)}
			<br />
			<b>wind: </b>
			{weather.current.wind_speed} mph direction {weather.current.wind_dir}
		</>
	)
}
