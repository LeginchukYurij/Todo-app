import { useSearchParams } from 'react-router-dom';

const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const params = [];

  for (let entry of searchParams.entries()) {
    params.push(entry);
  }

  console.log(params);

  return <div>Search</div>;
};

export default Search;
