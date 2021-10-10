import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(express.json());
app.use(morgan(':method :url :status :total-time :body'));
morgan.token('body', (request, response) => {
  //@ts-ignore
  return JSON.stringify(request.body);
});

import persons, { Person } from './persons';

let currentPersons = [...persons];

app.get('/api/persons', (_, response) => {
  response.json(currentPersons);
});

app.get('/api/persons/:id', (request, response) => {
  const id = parseInt(request.params.id);
  response.json(getPerson(id));
});

app.post('/api/persons', (request, response) => {
  const newPerson: Person = request.body;
  if (!newPerson || !newPerson.name || !newPerson.number) {
    return response.status(400).json({
      error: 'content missing',
    });
  }
  if (!personValidator(newPerson)) {
    return response.status(400).json({ error: 'name must be unique' });
  }
  response.send(addPerson(newPerson));
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  console.log(id);
  0;
  deletePerson(id);
  response.status(204).end();
});

app.patch('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  updatePerson({ ...request.body, id });
  return response.json({ ...request.body, id });
});

app.get('/info', (request, response) => {
  response.send(`
  <h3>Phonebook has info for ${currentPersons.length} people</h3>
  ${new Date().toDateString()}
  `);
});

const deletePerson = (id: number) => {
  currentPersons = currentPersons.filter((person) => person.id !== id);
};

const addPerson = (person: Person) => {
  const id =
    (currentPersons.length > 0
      ? Math.max(...currentPersons.map((n) => n.id))
      : 0) + 1;
  person.id = id;

  currentPersons = [...currentPersons, person];
  return person;
};

const updatePerson = (updatedPerson: Person) => {
  currentPersons = currentPersons.map((person) => {
    if (person.id !== updatedPerson.id) return person;
    return { ...person, ...updatedPerson };
  });
};

const getPerson = (id: number) => {
  return currentPersons.find((person) => person.id == id);
};

const personValidator = (newPerson: Person) => {
  return !currentPersons.some(
    (currentPerson) => currentPerson.name === newPerson.name
  );
};

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
