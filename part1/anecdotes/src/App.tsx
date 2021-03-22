import React, { useState, FC } from 'react'

const App: FC = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
	]
	const defaultVotes: number[] = new Array(anecdotes.length - 1).fill(0)

	const [votes, setVotes] = useState(defaultVotes)
	const [selected, setSelected] = useState(0)

	const handleNext = () => {
		const selection = Math.floor(Math.random() * anecdotes.length)
		setSelected(selection)
	}

	const handleVote = () => {
		const newVotes = [...votes]
		newVotes[selected] ? newVotes[selected]++ : (newVotes[selected] = 1)
		setVotes(newVotes)
	}

	return (
		<>
			<h1>Anecdote of the day</h1>
			<div>{anecdotes[selected]}</div>
			<div>has {votes[selected] || 0} votes</div>
			<button onClick={handleVote}>vote</button>
			<button onClick={handleNext}>next anecdote</button>
			<h1>Anecdote with the most votes</h1>
			{Math.max(...votes) > 0
				? anecdotes[votes.indexOf(Math.max(...votes))]
				: 'No votes....'}
		</>
	)
}

export default App
