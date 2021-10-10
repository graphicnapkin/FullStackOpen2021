"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, morgan_1["default"])(':method :url :status :total-time :body'));
morgan_1["default"].token('body', function (request, response) {
    //@ts-ignore
    return JSON.stringify(request.body);
});
var persons_1 = __importDefault(require("./persons"));
var currentPersons = __spreadArray([], persons_1["default"], true);
app.get('/api/persons', function (_, response) {
    response.json(currentPersons);
});
app.get('/api/persons/:id', function (request, response) {
    var id = parseInt(request.params.id);
    response.json(getPerson(id));
});
app.post('/api/persons', function (request, response) {
    var newPerson = request.body;
    if (!newPerson || !newPerson.name || !newPerson.number) {
        return response.status(400).json({
            error: 'content missing'
        });
    }
    if (!personValidator(newPerson)) {
        return response.status(400).json({ error: 'name must be unique' });
    }
    response.send(addPerson(newPerson));
});
app["delete"]('/api/persons/:id', function (request, response) {
    var id = Number(request.params.id);
    console.log(id);
    0;
    deletePerson(id);
    response.status(204).end();
});
app.patch('/api/persons/:id', function (request, response) {
    var id = Number(request.params.id);
    updatePerson(__assign(__assign({}, request.body), { id: id }));
    return response.json(__assign(__assign({}, request.body), { id: id }));
});
app.get('/info', function (request, response) {
    response.send("\n  <h3>Phonebook has info for " + currentPersons.length + " people</h3>\n  " + new Date().toDateString() + "\n  ");
});
var deletePerson = function (id) {
    currentPersons = currentPersons.filter(function (person) { return person.id !== id; });
};
var addPerson = function (person) {
    var id = (currentPersons.length > 0
        ? Math.max.apply(Math, currentPersons.map(function (n) { return n.id; })) : 0) + 1;
    person.id = id;
    currentPersons = __spreadArray(__spreadArray([], currentPersons, true), [person], false);
    return person;
};
var updatePerson = function (updatedPerson) {
    currentPersons = currentPersons.map(function (person) {
        if (person.id !== updatedPerson.id)
            return person;
        return __assign(__assign({}, person), updatedPerson);
    });
};
var getPerson = function (id) {
    return currentPersons.find(function (person) { return person.id == id; });
};
var personValidator = function (newPerson) {
    return !currentPersons.some(function (currentPerson) { return currentPerson.name === newPerson.name; });
};
var PORT = 3001;
app.listen(PORT);
console.log("Server running on port " + PORT);
