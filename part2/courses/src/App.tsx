import React, { useState } from 'react';
import Courses from './Courses';
import courses from './courses_list';
import { CourseType } from './types';

const App = () => {
  const [newCourses, setNewCourses] = useState<CourseType[]>(courses);
  const [input, setInput] = useState<string>('');

  const addCourse = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCourse: CourseType = {
      name: input,
      id: newCourses.length + 1,
      parts: [{ name: 'partname', id: 90, exercises: 8 }],
    };
    setNewCourses(newCourses.concat(newCourse));
    setInput('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1>Web development curriculum</h1>
      <Courses courses={newCourses} />
      <form onSubmit={addCourse}>
        <input value={input} onChange={handleChange} />
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default App;
