import { Component } from 'react';
import { Layout } from './Layout';
import { BreedSelect } from './BreedSelect';
import { fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { ErrorMessage } from './ErorrMessage';
import { HTTP_ERR_MSG } from 'constants';
import { DogSkeleton } from './DogSkeleton';

export class App extends Component {
  abortCtrl;

  state = {
    dog: null,
    loading: false,
    error: null,
  };

  fetchDog = async breedId => {
    if (this.abortCtrl) {
      this.abortCtrl.abort();
    }
    this.abortCtrl = new AbortController();

    try {
      this.setState({ loading: true, error: null });
      const fetchedDog = await fetchDogByBreed({
        breedId,
        abortCtrl: this.abortCtrl,
      });
      this.setState({ dog: fetchedDog });
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        this.setState({ error: HTTP_ERR_MSG });
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { dog, loading, error } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.fetchDog} />
        {loading && <DogSkeleton />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {dog && !loading && <Dog dog={dog} />}
      </Layout>
    );
  }
}
