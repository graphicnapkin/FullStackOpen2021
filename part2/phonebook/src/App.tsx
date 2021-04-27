import axios from 'axios'
import { useEffect, useState } from 'react'
import { People } from './types'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState<People[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    ;(async () => {
      const response = await axios.get('http://localhost:3001/persons')
      setPersons(response.data)
    })()
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App
