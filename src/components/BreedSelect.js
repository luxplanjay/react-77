import { fetchBreeds } from 'api';
import { Component } from 'react';
import Select from 'react-select';
import { ErrorMessage } from './ErorrMessage';
import { HTTP_ERR_MSG } from 'constants';

export class BreedSelect extends Component {
  abortCtrl;

  state = {
    breeds: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.abortCtrl = new AbortController();
      this.setState({ loading: true, error: null });
      const fetchedBreeds = await fetchBreeds(this.abortCtrl);
      this.setState({ breeds: fetchedBreeds });
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        this.setState({ error: HTTP_ERR_MSG });
      }
    } finally {
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    this.abortCtrl.abort();
  }

  render() {
    const { onSelect } = this.props;
    const { breeds, loading, error } = this.state;
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
  }
}
