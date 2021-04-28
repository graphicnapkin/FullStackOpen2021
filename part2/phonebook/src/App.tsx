import { useEffect, useState } from 'react'
import { Person, Notification } from './types'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Notifications from './Components/Notifications'
import { getAllPeople } from './services/api'

const App = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState<Notification | null>(null)

  useEffect(() => {
    ;(async () => {
      const people = await getAllPeople()
      setPersons(people)
    })()
  }, [])

  const handleSetNotification = (notification: Notification) => {
    setNotification(notification)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  return (
    <div style={{ padding: 100 }}>
      <h1>Phonebook</h1>
      {notification && <Notifications notification={notification} />}
      <Filter setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm
        setPersons={setPersons}
        persons={persons}
        setNotification={handleSetNotification}
      />
      <h2>Numbers</h2>
      <Persons
        setPersons={setPersons}
        persons={persons}
        filter={filter}
        setNotification={handleSetNotification}
      />
    </div>
  )
}

export default App
