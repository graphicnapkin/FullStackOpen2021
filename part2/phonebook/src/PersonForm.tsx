import React, { useState } from 'react'
import { PersonFormProps } from './types'

const PersonForm = ({ setPersons, persons }: PersonFormProps) => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const search = persons.find((person) => person.name === newName)
    if (!search) {
      return setPersons([...persons, { name: newName, number: newPhone || '', id: 0 }])
    }
    if (search.number !== newPhone) {
      window.alert('Phone number updated!')
      return setPersons([
        ...persons.filter((person) => person.name !== newName),
        { name: newName, number: newPhone || '', id:0 },
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

export default PersonForm
