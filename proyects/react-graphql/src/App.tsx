import { gql, useQuery } from '@apollo/client'
import './App.css'
import { Book } from './components/Book';
import BookForm from './components/FormCreateBook';

export const ALL__BOOK = gql`
  query AllBooks {
    allBooks {
      id,
      author,
      title,
      year  
    }
  }
  `
  
function App() {
 
  const { data, error, loading } = useQuery(
    ALL__BOOK,
    { 
      pollInterval : 2000
    }
  )
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
    {console.log(data.allBooks)
    }
    <h1>React + Graphql</h1>
    <Book books={data.allBooks}/>
    <BookForm/>
    </>
  )
}

export default App
