import { fetchBreeds } from 'api';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { ErrorMessage } from './ErorrMessage';
import { HTTP_ERR_MSG } from 'constants';

export const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();

    async function getBreeds() {
      try {
        setLoading(true);
        setError(null);
        const fetchedBreeds = await fetchBreeds(abortCtrl.signal);
        setBreeds(fetchedBreeds);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(HTTP_ERR_MSG);
        }
      } finally {
        setLoading(false);
      }
    }
    getBreeds();

    return () => abortCtrl.abort();
  }, []);

  const options = breeds.map(breed => {
    return {
      value: breed.id,
      label: breed.name,
    };
  });

  return (
    <div>
      <Select
        options={options}
        isLoading={loading}
        onChange={option => onSelect(option.value)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
