const App = () => {
	const course: Course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	}

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	)
}

const Header = ({ course }: { course: string }) => {
	return <h1>{course}</h1>
}

const Content = ({ parts }: Parts) => {
	return (
		<>
			{parts.map(({ name, exercises }, k) => (
				<Part key={k} name={name} exercises={exercises} />
			))}
		</>
	)
}

const Part = ({ name, exercises }: PartType) => (
	<p>
		{name} {exercises}
	</p>
)

const Total = ({ parts }: Parts) => {
	return <p>Number of exercises {parts.reduce((a, b) => a + b.exercises, 0)}</p>
}

interface PartType {
	name: string
	exercises: number
}

interface Parts {
	parts: PartType[]
}

interface Course extends Parts {
	name: string
}

export default App
