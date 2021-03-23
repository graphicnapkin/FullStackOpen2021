import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ])
  const [filter, setFilter] = useState('')

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

const Filter = ({ setFilter }: FilterType) => {
  return (
    <div>
      filter show with{' '}
      <input onChange={(e) => setFilter(e.target.value.toLowerCase())} />
    </div>
  )
}

const PersonForm = ({ setPersons, persons }: PersonFormProps) => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const search = persons.find((person) => person.name === newName)
    if (!search) {
      return setPersons([...persons, { name: newName, number: newPhone || '' }])
    }
    if (search.number !== newPhone) {
      window.alert('Phone number updated!')
      return setPersons([
        ...persons.filter((person) => person.name !== newName),
        { name: newName, number: newPhone || '' },
      ])
    }
    window.alert(`${newName} is already added to the phonebook`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{' '}
        <input onChange={(e) => setNewName(e.target.value)} value={newName} />
      </div>
      <div>
        phone:{' '}
        <input onChange={(e) => setNewPhone(e.target.value)} value={newPhone} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, filter }: PersonsType) => {
  return (
    <>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filter || ''))
        .map((person, i) => (
          <div key={i}>
            {person.name} : {person.number}
          </div>
        ))}
    </>
  )
}

interface PersonsType {
  persons: {
    name: string
    number: string
  }[]
  filter?: string
}

interface PersonFormProps extends PersonsType {
  setPersons: React.Dispatch<
    React.SetStateAction<
      {
        name: string
        number: string
      }[]
    >
  >
}

interface FilterType {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}
export default App
