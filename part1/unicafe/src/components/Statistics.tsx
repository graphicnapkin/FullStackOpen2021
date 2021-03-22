import React, { FC } from 'react'
import { Moods, Stat } from '../types'

const Statistics: FC<{ moods: Moods[] }> = ({ moods }) => {
	const all = moods.reduce((a, b) => a + b.val, 0)
	if (!all) return <>No feedback given</>

	const average =
		moods.reduce((a, b) => {
			if (b.label === 'good') return a + b.val
			if (b.label === 'bad') return a - b.val
			return a
		}, 0) / all

	const positive = moods.find((mood) => mood.label === 'good')?.val || 0

	return (
		<table>
			{moods.map(({ label, val }, k) => (
				<Statistic key={k} text={label} value={val} />
			))}
			<Statistic text={'all'} value={all} />
			<Statistic text={'average'} value={average} />
			<Statistic text={'all'} value={(positive / all) * 100 + '%'} />
		</table>
	)
}

const Statistic: FC<Stat> = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	)
}

export default Statistics
