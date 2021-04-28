export interface NewPerson {
  name: string
  number: string
}

export interface Person extends NewPerson {
  id: number
}
export interface PersonsProps {
  persons: Person[]
  filter?: string
  setPersons: React.Dispatch<React.SetStateAction<Person[]>>
}

export interface PersonFormProps extends PersonsProps {
  setPersons: React.Dispatch<React.SetStateAction<Person[]>>
}

export interface FilterProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}
