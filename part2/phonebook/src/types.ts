export interface PersonsType {
  persons: {
    name: string
    number: string
  }[]
  filter?: string
}

export interface PersonFormProps extends PersonsType {
  setPersons: React.Dispatch<
    React.SetStateAction<
      {
        name: string
        number: string
      }[]
    >
  >
}

export interface FilterType {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}
