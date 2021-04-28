import { PersonsProps, Person } from '../types'
import { deletePerson } from '../services/api'

const Persons = ({
  persons,
  filter,
  setPersons,
  setNotification,
}: PersonsProps) => {
  const handleClick = async (person: Person) => {
    setPersons(persons.filter((p) => p.id !== person.id))
    const response = await deletePerson(person)
    if (response !== 'error') {
      setNotification({ message: `Deleted ${person.name}`, type: 'remove' })
    } else {
      setNotification({
        message: `Information of ${person.name} already been removed from server`,
        type: 'error',
      })
    }
  }

  return (
    <>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filter || ''))
        .map((person, i) => (
          <div key={i}>
            {person.name} : {person.number}{' '}
            <button onClick={() => handleClick(person)}>delete</button>
          </div>
        ))}
    </>
  )
}

export default Persons
