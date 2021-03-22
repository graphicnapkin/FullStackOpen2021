import React, { useState, FC } from 'react'
import Buttons from './components/Buttons'
import Statistics from './components/Statistics'

const App: FC = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const moods = [
		{ label: 'good', handleClick: () => setGood(good + 1), val: good },
		{
			label: 'neutral',
			handleClick: () => setNeutral(neutral + 1),
			val: neutral,
		},
		{ label: 'bad', handleClick: () => setBad(bad + 1), val: bad },
	]

	return (
		<div>
			<h1>Give Feedback</h1>
			<Buttons moods={moods} />
			<h1>Statistics</h1>
			<Statistics moods={moods} />
		</div>
	)
}

export default App
