import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
import persons, { PersonType } from './persons';
import Person, {
  addPerson,
  updatePerson,
  personValidator,
  getPerson,
  deletePerson,
} from './mongo';

app.use(express.static('build'));
app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :total-time :body'));
morgan.token('body', (request, response) => {
  //@ts-ignore
  return JSON.stringify(request.body);
});

let currentPersons = [...persons];
app.get('/api/persons', (_, response) => {
  response.json(currentPersons);
});

app.get('/api/persons/:id', (request, response) => {
  const id = parseInt(request.params.id);
  response.json(getPerson(id));
});

app.post('/api/persons', (request, response) => {
  const newPerson: PersonType = request.body;
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

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
