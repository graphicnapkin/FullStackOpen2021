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
  setNotification: (notification: Notification) => void
}

export interface PersonFormProps extends PersonsProps {
  setPersons: React.Dispatch<React.SetStateAction<Person[]>>
  setNotification: (notification: Notification) => void
}

export interface FilterProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export interface Notification {
  message: string
  type: 'add' | 'update' | 'remove' | 'error'
}

export interface NotificationProps {
  notification: Notification
}
