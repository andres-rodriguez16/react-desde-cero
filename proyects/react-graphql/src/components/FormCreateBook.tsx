import React, { useState } from 'react';
import { useCreateBook } from '../hooks/useCreateBook.js'



const BookForm: React.FC = () => {
  const { createBook } = useCreateBook()
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createBook({
      variables: {
        author: author,
        title: title,
        year: parseInt(year),
        edition: "one"
      },
    });

    setAuthor("")
    setTitle("")
    setYear("")
    alert("create book success")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Autor:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Año:
          <input
            type="number"
            value={year}
            defaultValue={1}
            onChange={(e) => setYear(e.target.value)}
            min={1}
            required
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>

  );
};

export default BookForm;
