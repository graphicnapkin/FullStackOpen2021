import axios from 'axios';
import { Person, NewPerson } from '../types';

const url = '/api/persons';

export const getAllPeople = async (): Promise<Person[]> => {
  const response = await axios.get(url);
  console.log(response);
  return response.data;
};

export const addPerson = async (person: NewPerson): Promise<Person> => {
  const response = await axios.post(url, person);
  return response.data;
};

export const updatePerson = async (person: Person): Promise<Person> => {
  const response = await axios.patch(`${url}/${person.id}`, person);
  return response.data;
};

export const deletePerson = async (person: Person) => {
  try {
    await axios.delete(`${url}/${person.id}`);
  } catch (error) {
    return 'error';
  }
};
