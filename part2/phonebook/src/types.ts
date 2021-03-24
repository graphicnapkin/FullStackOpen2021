export interface People {
  name: string,
  number: string,
  id: number
}

export interface PersonsType {
  persons: People[]
  filter?: string
}

export interface PersonFormProps extends PersonsType {
  setPersons: React.Dispatch<
    React.SetStateAction<
      People[]
    >
  >
}

export interface FilterType {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}
