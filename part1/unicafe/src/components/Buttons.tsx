import React, { FC } from 'react'
import { Moods, MoodButton } from '../types'

const Buttons: FC<{ moods: Moods[] }> = ({ moods }) => {
	return (
		<div>
			{moods.map((button: Moods, k) => (
				<Button key={k} handleClick={button.handleClick} label={button.label} />
			))}
		</div>
	)
}
const Button: FC<MoodButton> = ({ handleClick, label }) => {
	return <button onClick={handleClick}>{label}</button>
}
export default Buttons
