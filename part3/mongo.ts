import mongoose from 'mongoose';
import { PersonType } from './persons';
let currentPersons: PersonType[] = [];

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  );
}
const password = process.argv[2];
const url = `mongodb+srv://fullStackOpenUser:${password}@fullstackopencluster1.di2zw.gcp.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(url);
const personSchema = new mongoose.Schema<{ name: string; number: string }>({
  name: String,
  number: String,
});

export const deletePerson = (id: number) => {
  currentPersons = currentPersons.filter((person) => person.id !== id);
};

export const addPerson = (person: PersonType) => {
  const id =
    (currentPersons.length > 0
      ? Math.max(...currentPersons.map((n) => n.id))
      : 0) + 1;
  person.id = id;

  currentPersons = [...currentPersons, person];
  return person;
};

export const updatePerson = (updatedPerson: PersonType) => {
  currentPersons = currentPersons.map((person) => {
    if (person.id !== updatedPerson.id) return person;
    return { ...person, ...updatedPerson };
  });
};

export const getPerson = (id: number) => {
  return currentPersons.find((person) => person.id == id);
};

export const personValidator = (newPerson: PersonType) => {
  return !currentPersons.some(
    (currentPerson) => currentPerson.name === newPerson.name
  );
};

const Person = mongoose.model('Person', personSchema);
export default Person;
