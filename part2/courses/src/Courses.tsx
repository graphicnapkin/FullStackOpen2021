import { CourseType, PartType, Parts } from './types'

const Courses = ({ courses }: { courses: CourseType[] }) => {
	return (
		<>
			{courses.map((course) => {
				return (
					<div key={course.id}>
						<Header course={course.name} />
						<Content parts={course.parts} />
						<Total parts={course.parts} />
					</div>
				)
			})}
		</>
	)
}
const Header = ({ course }: { course: string }) => {
	return <h2>{course}</h2>
}
const Content = ({ parts }: Parts) => {
	return (
		<>
			{parts.map(({ name, exercises, id }) => (
				<Part key={id} id={id} name={name} exercises={exercises} />
			))}
		</>
	)
}
const Total = ({ parts }: Parts) => {
	return (
		<p>
			<strong>
				Total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises{' '}
			</strong>
		</p>
	)
}
const Part = ({ name, exercises }: PartType) => (
	<p>
		{name} {exercises}
	</p>
)

export default Courses
