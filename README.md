# Steps

```js
// 😉
const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(`/?q=${query}&page=${page}`).then().catch();
  }, [query, page]);

  const handleSubmit = newQuery => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <LoadMoreBtn onClick={handleLoadMore} />
    </div>
  );
};
```
