import './App.css'
import { Book } from './components/Book';
import BookForm from './components/FormCreateBook';
import { useBooks } from './hooks/useBooks.js';
function App() {
  const {data, loading, error} = useBooks()
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <h1>React + Graphql</h1>
      <Book books={data.allBooks} />
      <BookForm />
    </>
  )
}

export default App
