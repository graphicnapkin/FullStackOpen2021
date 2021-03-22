export interface MoodButton {
	handleClick: () => void
	label: string
}

export interface Moods extends MoodButton {
	val: number
}

export interface Stat {
	text: string
	value: number | string
}
