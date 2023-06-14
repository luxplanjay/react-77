import { useRef, useState } from 'react';
import { Layout } from './Layout';
import { BreedSelect } from './BreedSelect';
import { fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { ErrorMessage } from './ErorrMessage';
import { HTTP_ERR_MSG } from 'constants';
import { DogSkeleton } from './DogSkeleton';

// RENDER 1
// CREATE REF
// abortCtrl.current > undefined
// if > FALSE
// abortCtrl.current = C1

// RENDER 2
// abortCtrl.current > C1
// if > TRUE > ABORT
// abortCtrl.current = C2

// RENDER 3
// abortCtrl.current > C2
// if > TRUE > ABORT
// abortCtrl.current = C3

export const App = () => {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortCtrl = useRef();

  const fetchDog = async breedId => {
    if (abortCtrl.current) {
      abortCtrl.current.abort();
    }
    abortCtrl.current = new AbortController();

    try {
      setLoading(true);
      setError(null);
      const fetchedDog = await fetchDogByBreed({
        breedId,
        abortCtrl: abortCtrl.current,
      });
      setDog(fetchedDog);
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        setError(HTTP_ERR_MSG);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <BreedSelect onSelect={fetchDog} />
      {loading && <DogSkeleton />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {dog && !loading && <Dog dog={dog} />}
    </Layout>
  );
};
