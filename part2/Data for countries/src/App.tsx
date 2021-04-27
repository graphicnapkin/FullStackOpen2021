import React, { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import Results from './Components/Results'

const App = () => {
	const [search, setSearch] = useState<string>('')
	return (
		<div className="App">
			<SearchBar search={search} handleSearch={setSearch} />
			<Results search={search} />
		</div>
	)
}

export default App
