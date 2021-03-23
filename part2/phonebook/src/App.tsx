import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

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
    <div>
      <h1>Phonebook</h1>
      <div>
        filter show with{' '}
        <input onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{' '}
          <input onChange={(e) => setNewName(e.target.value)} value={newName} />
        </div>
        <div>
          phone:{' '}
          <input
            onChange={(e) => setNewPhone(e.target.value)}
            value={newPhone}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) => person.name.toLowerCase().includes(search))
        .map((person, i) => (
          <div key={i}>
            {person.name} : {person.number}
          </div>
        ))}
      {`Name: ${newName}`}
    </div>
  )
}

export default App
