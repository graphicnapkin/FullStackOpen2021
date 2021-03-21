const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<div>
			<Header course={course} />
			<Content
				parts={[
					{ title: part1, exercises: exercises1 },
					{ title: part2, exercises: exercises2 },
					{ title: part3, exercises: exercises3 },
				]}
			/>
			<Total exercises={[exercises1, exercises2, exercises3]} />
		</div>
	)
}

const Header = ({ course }: { course: string }) => {
	return <h1>{course}</h1>
}

const Content = ({ parts }: { parts: PartType[] }) => {
	return (
		<>
			{parts.map(({ title, exercises }, k) => (
				<Part key={k} title={title} exercises={exercises} />
			))}
		</>
	)
}

const Part = ({ title, exercises }: { title: string; exercises: number }) => (
	<p>
		{title} {exercises}
	</p>
)

const Total = ({ exercises }: { exercises: number[] }) => {
	return <p>Number of exercises {exercises.reduce((a, b) => a + b, 0)}</p>
}

interface PartType {
	title: string
	exercises: number
}

export default App
