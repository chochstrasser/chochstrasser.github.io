import * as React from 'react';
import { useState, useEffect } from 'react';
import useDebounce from '../../components/hooks/useDebounce';

type SWAPIType = {
  id: number;
  next: string | null;
  previous: string | null;
  results: [] | null;
};

// Usage
const StarWars = () => {
  // State and setters for ...
  // Search term
  const [searchTerm, setSearchTerm] = useState('');
  // API search results
  const [results, setResults] = React.useState<SWAPIType | null>();
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false);
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        search(debouncedSearchTerm).then((results) => {
          setIsSearching(false);
          setResults(results);
        });
      } else {
        setResults(null);
        setIsSearching(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  const handlePage = (query: string) => {
    setIsSearching(true);
    const fetched = fetch(query, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        console.error(error);
        return {};
      });

    fetched.then((results: any) => {
      setIsSearching(false);
      setResults(results);
    });
    setIsSearching(false);
  };

  return (
    <div>
      <input placeholder="Search Star Wars" onChange={(e) => setSearchTerm(e.target.value)} />
      {isSearching && <div>Searching ...</div>}
      {results?.results?.map((result: { name: string; height: string; mass: string }) => (
        <div key={result.name}>
          <h4>{result.name}</h4>
        </div>
      ))}
      {results?.previous && <button onClick={() => handlePage(results?.previous ?? '')}>Previous</button>}
      {results?.next && <button onClick={() => handlePage(results?.next ?? '')}>Next</button>}
    </div>
  );
};

// API search function
function search(search: string) {
  return fetch(`https://swapi.dev/api/people?search=${search}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
      return {};
    });
}

export default StarWars;
