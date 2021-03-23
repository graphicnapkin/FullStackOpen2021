import { PersonsType } from './types'

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

export default Persons
