import Courses from './Courses'
import courses from './courses_list'

const App = () => {
	return (
		<>
			<h1>Web development curriculum</h1>
			<Courses courses={courses} />
		</>
	)
}

export default App
