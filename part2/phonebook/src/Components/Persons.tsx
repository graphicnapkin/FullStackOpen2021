import { PersonsProps, Person } from '../types'
import { deletePerson } from '../services/api'

const Persons = ({ persons, filter, setPersons }: PersonsProps) => {
  const handleClick = (person: Person) => {
    deletePerson(person)
    setPersons(persons.filter((p) => p.id !== person.id))
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
