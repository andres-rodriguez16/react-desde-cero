import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client'
import { ALL__BOOK } from '../App'

const CREATE_BOOK = gql`
mutation AddBook($title: String!, $author: String!, $year: Int!, $edition: String!) {
  addBook(
    title: $title, 
    author: $author, 
    year: $year, 
    edition: $edition
    ) {
      author,
      id,
      title,
      year  
  }
}
`

const BookForm: React.FC = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState("");

  const [createBook ] = useMutation(CREATE_BOOK,
    { 
      refetchQueries : [ { query : ALL__BOOK }]
    }
  )
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  
    createBook({
      variables : {
        author : author,
        title : title,
        year : parseInt(year),
        edition : "one"
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
