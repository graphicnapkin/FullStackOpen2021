import React, { useState } from 'react'
import { PersonFormProps } from '../types'
import { addPerson, updatePerson } from '../services/api'

const PersonForm = ({
  setPersons,
  persons,
  setNotification,
}: PersonFormProps) => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const search = persons.find((person) => person.name === newName)
    if (!search) {
      const newPerson = await addPerson({ name: newName, number: newPhone })
      setNotification({ message: `Added ${newPerson.name}`, type: 'add' })
      return setPersons(persons.concat(newPerson))
    }
    if (search.number !== newPhone) {
      const updatedPerson = await updatePerson({ ...search, number: newPhone })
      setPersons(
        persons
          .filter((person) => person.id !== updatedPerson.id)
          .concat(updatedPerson)
      )

      setNotification({
        message: `Updated ${updatedPerson.name}`,
        type: 'update',
      })
      return
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
