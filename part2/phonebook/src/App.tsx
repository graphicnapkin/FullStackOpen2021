import { useEffect, useState } from 'react'
import { Person } from './types'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import { getAllPeople } from './services/api'

const App = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    ;(async () => {
      const people = await getAllPeople()
      setPersons(people)
    })()
  }, [])

  return (
    <div style={{ padding: 100 }}>
      <h1>Phonebook</h1>
      <Filter setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h2>Numbers</h2>
      <Persons setPersons={setPersons} persons={persons} filter={filter} />
    </div>
  )
}

export default App
